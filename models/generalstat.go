package models

import (
	"encoding/json"
	"fmt"
	. "media/proto"
	. "media/utils"

	"os"
	"path/filepath"
	"runtime"
	"strings"
	"sync"
	"sync/atomic"
	"time"

	"github.com/astaxie/beego"
)

type SubFuncStat struct {
	ReqNum       int64
	SuccNum      int64
	ErrNum       int64
	MaxTmCost    float32
	AvgTmCost    float32
	MinTmCost    float32
	CostLt1Sec   int64
	CostIn1_3Sec int64
	CostGt3Sec   int64
	tmCostSum    float64
}

type FuncStat struct {
	TotalStat SubFuncStat
	SliceStat SubFuncStat
}

var (
	onlineCliNum           int32
	allocMgoSessionSuccNum int64
	allocMgoSessionFailNum int64
	roleCacheHitNum        uint64
	roleCacheMissNum       uint64
	getRoleNum             uint64
	getGcRoleInfoNum       uint64
	getDbPhotoVerNum       uint64
	getRoleLstNum          uint64
	getGcRoleInfoLstNum    uint64
	getDbPhotoVerLstNum    uint64
	cliStat                map[string]*FuncStat
	dbStat                 map[string]*FuncStat
	cliProcStat            map[string]*FuncStat

	cliStatLock     sync.Mutex
	dbStatLock      sync.Mutex
	cliProcStatLock sync.Mutex

	cliCmdStr map[uint16]string

	statInterval uint32

	procStartTm time.Time
	lastResetTm time.Time
)

func InitStatObj() {
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_REGISTER_REQ)] = "doCliRegReq"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_HBT_REQ)] = "doCliHbtReq"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_GET_OWNERINFO_REQ)] = "doCliGetOwnerInfo"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_ADD_BLOGLIKE_REQ)] = "doCliAddBlogLike"

	// board message....
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_GET_BOARD_REQ)] = "doCliGetBoardMsg"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_ADD_BOARD_REQ)] = "doCliAddBoardMsg"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_DEL_BOARD_REQ)] = "doCliDelBoardMsg"

	// mood message....
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_GET_MOOD_REQ)] = "doCliGetMoodMsg"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_ADD_MOOD_REQ)] = "doCliAddMoodMsg"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_DEL_MOOD_REQ)] = "doCliDelMoodMsg"

	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_ADD_MOODCOMMENT_REQ)] = "doCliAddMoodComment"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_DEL_MOODCOMMENT_REQ)] = "doCliDelMoodComment"

	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_ADD_MOODLIKE_REQ)] = "doCliAddMoodLike"

	// friend message....
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_GET_FRIENDMSG_REQ)] = "doCliGetFriendMsg"

	// portrait....
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_GET_PORTRAIT_REQ)] = "doCliGetPortrait"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_SET_PORTRAIT_REQ)] = "doCliSetPortrait"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_DEL_PORTRAIT_REQ)] = "doCliDelPortrait"

	// declare....
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_SET_BLOGDECLARE_REQ)] = "doCliSetBlogDeclare"

	// voice processing....
	//cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_TRANSLATE_REQ)] = "doCliTranslate"
	//cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_FETCH_VOICE_REQ)] = "doCliFetchVoice"

	// voice-data set-get command for compliance temporarily.
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_SEND_VOICE_REQ)] = "doCliSendChatSvrVoice"
	cliCmdStr[uint16(CLI_MEDIA_CMD_CLI_TO_MEDIA_GET_VOICE_REQ)] = "doCliGetChatSvrVoice"

	for _, cmdStr := range cliCmdStr {
		funcStat := &FuncStat{}
		cliStat[cmdStr] = funcStat

		funcStat2 := &FuncStat{}
		cliProcStat[cmdStr] = funcStat2
	}

	procStartTm = time.Now()

}

func GetCmdStr(cmd uint16) string {
	cmdStr, ok := cliCmdStr[cmd]
	if ok {
		return cmdStr
	}
	return ""
}

func init() {
	n, _ := beego.AppConfig.Int("statinterval")
	statInterval = uint32(n)
	fmt.Println("statInterval:", statInterval)

	cliCmdStr = make(map[uint16]string)
	cliStat = make(map[string]*FuncStat)
	dbStat = make(map[string]*FuncStat)
	cliProcStat = make(map[string]*FuncStat)

	InitStatObj()

	go DoStatDaemon()
}

func StatCliReq(cmd uint16, succ bool, begin time.Time) {
	cliStatLock.Lock()
	defer cliStatLock.Unlock()

	cmdStr, ok := cliCmdStr[cmd]
	if !ok {
		beego.Error("Inside StatCliReq(), cann't find cmdStr for cmd:", cmd)
		return
	}

	elapsed := time.Since(begin)
	costMilliSec := float32(elapsed) / float32(time.Millisecond)

	funcStat := cliStat[cmdStr]

	statFunc(funcStat, succ, costMilliSec)
}

func StatCliProcCost(cmd uint16, succ bool, elapsed time.Duration) {
	cliProcStatLock.Lock()
	defer cliProcStatLock.Unlock()

	cmdStr, ok := cliCmdStr[cmd]
	if !ok {
		beego.Error("Inside StatCliProcCost(), cann't find cmdStr for cmd:", cmd)
		return
	}

	costMilliSec := float32(elapsed) / float32(time.Millisecond)

	funcStat := cliProcStat[cmdStr]

	statFunc(funcStat, succ, costMilliSec)
}

func StatDbReq(funcName string, succ bool, begin time.Time) {
	dbStatLock.Lock()
	defer dbStatLock.Unlock()

	_, ok := dbStat[funcName]
	if !ok {
		obj := &FuncStat{}
		dbStat[funcName] = obj
	}

	elapsed := time.Since(begin)
	costMilliSec := float32(elapsed) / float32(time.Millisecond)

	funcStat := dbStat[funcName]

	statFunc(funcStat, succ, costMilliSec)
}

func statFunc(funcStat *FuncStat, succ bool, costMilliSec float32) {
	statSubFunc(&funcStat.TotalStat, succ, costMilliSec)
	statSubFunc(&funcStat.SliceStat, succ, costMilliSec)
}

func statSubFunc(subFunc *SubFuncStat, succ bool, costMilliSec float32) {
	subFunc.ReqNum++

	if succ {
		subFunc.SuccNum++
	} else {
		subFunc.ErrNum++
	}

	if costMilliSec > subFunc.MaxTmCost {
		subFunc.MaxTmCost = costMilliSec
	}

	if subFunc.MinTmCost == 0 {
		subFunc.MinTmCost = costMilliSec
	} else if costMilliSec < subFunc.MinTmCost {
		subFunc.MinTmCost = costMilliSec
	}

	subFunc.tmCostSum += float64(costMilliSec)

	if subFunc.ReqNum > 0 {
		f := subFunc.tmCostSum / float64(subFunc.ReqNum)
		subFunc.AvgTmCost = float32(f)
	}

	switch {
	case costMilliSec < 1000:
		subFunc.CostLt1Sec++
	case costMilliSec >= 1000 && costMilliSec < 3000:
		subFunc.CostIn1_3Sec++
	default:
		subFunc.CostGt3Sec++
	}
}

func resetCliStat() {
	for _, funcStat := range cliStat {
		subFunc := &funcStat.SliceStat

		subFunc.ReqNum = 0
		subFunc.SuccNum = 0
		subFunc.ErrNum = 0
		subFunc.MaxTmCost = 0
		subFunc.AvgTmCost = 0
		subFunc.MinTmCost = 0
		subFunc.CostLt1Sec = 0
		subFunc.CostIn1_3Sec = 0
		subFunc.CostGt3Sec = 0
		subFunc.tmCostSum = 0
	}

	lastResetTm = time.Now()
}

func resetcliProcStat() {
	for _, funcStat := range cliProcStat {
		subFunc := &funcStat.SliceStat

		subFunc.ReqNum = 0
		subFunc.SuccNum = 0
		subFunc.ErrNum = 0
		subFunc.MaxTmCost = 0
		subFunc.AvgTmCost = 0
		subFunc.MinTmCost = 0
		subFunc.CostLt1Sec = 0
		subFunc.CostIn1_3Sec = 0
		subFunc.CostGt3Sec = 0
		subFunc.tmCostSum = 0
	}

	lastResetTm = time.Now()
}

func resetDbStat() {
	for _, funcStat := range dbStat {
		subFunc := &funcStat.SliceStat

		subFunc.ReqNum = 0
		subFunc.SuccNum = 0
		subFunc.ErrNum = 0
		subFunc.MaxTmCost = 0
		subFunc.AvgTmCost = 0
		subFunc.MinTmCost = 0
		subFunc.tmCostSum = 0
	}
}

func IncOnlineCliNum() {
	atomic.AddInt32(&onlineCliNum, 1)
}

func DecOnlineCliNum() {
	atomic.AddInt32(&onlineCliNum, -1)
}

func IncRoleCacheHitNum() {
	atomic.AddUint64(&roleCacheHitNum, 1)
}

func IncRoleCacheMissNum() {
	atomic.AddUint64(&roleCacheMissNum, 1)
}

func IncGetRoleNum() {
	atomic.AddUint64(&getRoleNum, 1)
}

func IncgetGcRoleInfoNum() {
	atomic.AddUint64(&getGcRoleInfoNum, 1)
}

func IncGetDbPhotoVerNum() {
	atomic.AddUint64(&getDbPhotoVerNum, 1)
}

func IncGetRoleLstNum() {
	atomic.AddUint64(&getRoleLstNum, 1)
}

func IncgetGcRoleInfoLstNum() {
	atomic.AddUint64(&getGcRoleInfoLstNum, 1)
}

func IncGetDbPhotoVerLstNum() {
	atomic.AddUint64(&getDbPhotoVerLstNum, 1)
}

func AllocMgoStat(succ bool) {
	if succ {
		atomic.AddInt64(&allocMgoSessionSuccNum, 1)
	} else {
		atomic.AddInt64(&allocMgoSessionFailNum, 1)
	}
}

func marshalCliStat2Json() ([]byte, error) {
	b, err := json.MarshalIndent(cliStat, "", "\t")
	b = append(b, '\n')

	return b, err
}

func marshalDbStat2Json() ([]byte, error) {
	b, err := json.MarshalIndent(dbStat, "", "\t")
	b = append(b, '\n')

	return b, err
}

func marshalCliProcStat2Json() ([]byte, error) {
	b, err := json.MarshalIndent(cliProcStat, "", "\t")
	b = append(b, '\n')

	return b, err
}

func formatStatHeader() string {
	return "\n--------------------------------\n" + GetCurrTmStr() + "\n"
}

func getSliceRunTm() (int32, int32) {
	if lastResetTm.IsZero() {
		lastResetTm = procStartTm
	}

	return int32(time.Now().Unix() - procStartTm.Unix()), int32(time.Now().Unix() - lastResetTm.Unix())
}

type MyMemStat struct {
	// General statistics.
	Alloc      uint64 // bytes allocated and still in use
	TotalAlloc uint64 // bytes allocated (even if freed)
	Mallocs    uint64 // number of mallocs
	Frees      uint64 // number of frees
}

type RoleCacheInfo struct {
	Capacity int32
	CurrLen  int32
	HitNum   uint64
	MissNum  uint64
}

type RoleInfoGet struct {
	GetRoleNum       uint64
	GetGcRoleInfoNum uint64
	GetDbPhotoVerNum uint64

	GetRoleLstNum       uint64
	GetGcRoleInfoLstNum uint64
	GetDbPhotoVerLstNum uint64
}

type MgoInfo struct {
	SessionCapacity int32
	SessionFreeNum  int32
}

type OverviewStat struct {
	NumCpu                 int
	NumGoroutine           int
	Mem                    MyMemStat //runtime.MemStats
	CurrCliNum             int32
	AllocMgoSessionSuccNum int64
	AllocMgoSessionFailNum int64
	ProcStartTm            string
	ProcRunSeconds         int32
	SliceRunSeconds        int32
	CurrentTime            string
	RoleCache              RoleCacheInfo
	GetRoleInfo            RoleInfoGet
	BlogMgo                MgoInfo
	PortraitMgo            MgoInfo
}

type CliStatSnapshot struct {
	ProcRunSeconds  int32
	SliceRunSeconds int32
	CliStat         map[string]*FuncStat
}

type DbStatSnapshot struct {
	ProcRunSeconds  int32
	SliceRunSeconds int32
	DbStat          map[string]*FuncStat
}

type CliProcStatSnapshot struct {
	ProcRunSeconds  int32
	SliceRunSeconds int32
	CliProcStat     map[string]*FuncStat
}

func GetOverViewStat() ([]byte, error) {
	stat := &OverviewStat{}

	stat.NumCpu = runtime.NumCPU()
	stat.NumGoroutine = runtime.NumGoroutine()
	m := &runtime.MemStats{}
	runtime.ReadMemStats(m)
	stat.Mem.Alloc = m.Alloc
	stat.Mem.TotalAlloc = m.TotalAlloc
	stat.Mem.Mallocs = m.Mallocs
	stat.Mem.Frees = m.Frees
	stat.CurrCliNum = atomic.LoadInt32(&onlineCliNum)

	stat.AllocMgoSessionSuccNum = atomic.LoadInt64(&allocMgoSessionSuccNum)
	stat.AllocMgoSessionFailNum = atomic.LoadInt64(&allocMgoSessionFailNum)

	stat.RoleCache.HitNum = atomic.LoadUint64(&roleCacheHitNum)
	stat.RoleCache.MissNum = atomic.LoadUint64(&roleCacheMissNum)

	stat.GetRoleInfo.GetRoleNum = atomic.LoadUint64(&getRoleNum)
	stat.GetRoleInfo.GetGcRoleInfoNum = atomic.LoadUint64(&getGcRoleInfoNum)
	stat.GetRoleInfo.GetDbPhotoVerNum = atomic.LoadUint64(&getDbPhotoVerNum)

	stat.GetRoleInfo.GetRoleLstNum = atomic.LoadUint64(&getRoleLstNum)
	stat.GetRoleInfo.GetGcRoleInfoLstNum = atomic.LoadUint64(&getGcRoleInfoLstNum)
	stat.GetRoleInfo.GetDbPhotoVerLstNum = atomic.LoadUint64(&getDbPhotoVerLstNum)

	stat.ProcStartTm = GetTmStr(procStartTm)

	stat.ProcRunSeconds, stat.SliceRunSeconds = getSliceRunTm()

	stat.CurrentTime = GetTmStr(time.Now())

	b, err := json.MarshalIndent(stat, "", "\t")
	b = append(b, '\n')

	return b, err

}

func GetCliStat() ([]byte, error) {
	stat := &CliStatSnapshot{}

	cliStatLock.Lock()
	defer cliStatLock.Unlock()

	stat.ProcRunSeconds, stat.SliceRunSeconds = getSliceRunTm()

	stat.CliStat = cliStat

	b, err := json.MarshalIndent(stat, "", "\t")
	b = append(b, '\n')

	return b, err
}

func GetDbStat() ([]byte, error) {
	stat := &DbStatSnapshot{}

	dbStatLock.Lock()
	defer dbStatLock.Unlock()

	stat.ProcRunSeconds, stat.SliceRunSeconds = getSliceRunTm()

	stat.DbStat = dbStat

	b, err := json.MarshalIndent(stat, "", "\t")
	b = append(b, '\n')

	return b, err
}

func GetCliProcStat() ([]byte, error) {
	stat := &CliProcStatSnapshot{}

	cliStatLock.Lock()
	defer cliStatLock.Unlock()

	stat.ProcRunSeconds, stat.SliceRunSeconds = getSliceRunTm()

	stat.CliProcStat = cliProcStat

	b, err := json.MarshalIndent(stat, "", "\t")
	b = append(b, '\n')

	return b, err
}

// doSTatDaemon periodically write stat-logs
func DoStatDaemon() {
	os.MkdirAll("log", os.ModePerm)

	program := filepath.Base(os.Args[0])
	name := strings.TrimSuffix(program, filepath.Ext(program))

	file := "log/" + name + ".stat"
	beego.Info(file)
	f, err := os.OpenFile(file, os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0600)
	if err != nil {
		beego.Error(err)
		return
	}

	defer f.Close()

	for _ = range time.NewTicker(time.Duration(statInterval) * time.Second).C {
		cliStatLock.Lock()
		dbStatLock.Lock()
		cliProcStatLock.Lock()

		b := make([]byte, 4096)

		offset := copy(b, formatStatHeader())

		b1, _ := marshalCliStat2Json()
		b2, _ := marshalDbStat2Json()
		b3, _ := marshalCliProcStat2Json()

		offset += copy(b[offset:], b1)
		offset += copy(b[offset:], b2)
		offset += copy(b[offset:], b3)

		if _, err = f.WriteString(string(b[0:offset])); err != nil {
			beego.Error(err)
		}

		resetCliStat()
		resetDbStat()
		resetcliProcStat()

		lastResetTm = time.Now()

		dbStatLock.Unlock()
		cliStatLock.Unlock()
		cliProcStatLock.Unlock()
	}
}

type ReportStat struct {
	ServerId    uint32 `json:"server_id"`
	ServerType  string `json:"type"`
	ServerIp    string `json:"ip"`
	ReportTm    string `json:"report_time"`
	ProcStartTm string `json:"process_start_time"`
	CurrCliNum  int32  `json:"tcp_client_num"`
}

func GenReportStat() ([]byte, error) {
	stat := &ReportStat{}

	stat.ReportTm = GetTmStr(time.Now())

	stat.ProcStartTm = GetTmStr(procStartTm)

	stat.CurrCliNum = atomic.LoadInt32(&onlineCliNum)

	b, err := json.MarshalIndent(stat, "", "\t")
	b = append(b, '\n')

	return b, err
}
