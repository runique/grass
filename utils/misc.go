package utils

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"net"
	"net/http"
	"runtime"
	"strconv"
	"strings"
	//"syscall"
	"time"
)

func GetTmStr(t time.Time) string {
	year, month, day := t.Date()
	hour, minute, second := t.Clock()

	return fmt.Sprintf("%04d-%02d-%02d %02d:%02d:%02d", year, month, day, hour, minute, second)
}

func GetCurrTmStr() string {
	now := time.Now()
	year, month, day := now.Date()
	hour, minute, second := now.Clock()

	s := fmt.Sprintf("%04d-%02d-%02d %02d:%02d:%02d", year, month, day, hour, minute, second)

	return s
}

func GetCurrDayStr() string {
	now := time.Now()
	year, month, day := now.Date()

	s := fmt.Sprintf("%04d%02d%02d", year, month, day)

	return s
}

func IsToday(t uint64) bool {
	now := time.Now()
	year, month, day := now.Date()

	tm := time.Unix(int64(t), 0)
	myYear, myMonth, myDay := tm.Date()

	return year == myYear && month == myMonth && day == myDay
}

func GetFuncName(skip int) string {
	pc, _, _, _ := runtime.Caller(skip)

	whole := runtime.FuncForPC(pc).Name()
	index := strings.LastIndex(whole, ".")
	if index < 0 || index >= len(whole)-1 {
		return whole
	}

	return whole[index+1:]
}

func GetHttpClientIp(r *http.Request) string {
	if ipProxy := r.Header.Get("X-FORWARDED-FOR"); len(ipProxy) > 0 {
		return ipProxy
	}

	ip, _, _ := net.SplitHostPort(r.RemoteAddr)
	return ip
}

func GetTcpClientIp(conn *net.Conn) string {
	ip, _, _ := net.SplitHostPort((*conn).RemoteAddr().String())
	return ip
}

func IpStr2Integer(ipStr *string) uint32 {
	strArr := strings.Split(*ipStr, ".")
	bArr := make([]byte, len(strArr))
	for i := 0; i < len(strArr); i++ {
		n, _ := strconv.Atoi(strArr[i])
		bArr[i] = byte(n)
	}
	nIp := binary.BigEndian.Uint32(bArr)

	return nIp
}

// image formats and magic numbers
var imgMagicTable = map[string]string{
	"\xff\xd8\xff":      "image/jpeg",
	"\x89PNG\r\n\x1a\n": "image/png",
	"GIF87a":            "image/gif",
	"GIF89a":            "image/gif",
}

// mimeFromIncipit returns the mime type of an image file from its first few
// bytes or the empty string if the file does not look like a known file type
func ImgMimeFromIncipit(incipit []byte) string {
	for magic, mime := range imgMagicTable {
		if bytes.HasPrefix(incipit, []byte(magic)) {
			return mime
		}
	}

	return ""
}

func SetRlimit() {
	/*
		var rLimit syscall.Rlimit

		err := syscall.Getrlimit(syscall.RLIMIT_NOFILE, &rLimit)

		if err != nil {
			fmt.Println("Error Getting Rlimit:", err)
		}
		fmt.Println(rLimit)

		rLimit.Max = 999999
		rLimit.Cur = 999999

		err = syscall.Setrlimit(syscall.RLIMIT_NOFILE, &rLimit)
		if err != nil {
			fmt.Println("Error Setting Rlimit ", err)
		}
		err = syscall.Getrlimit(syscall.RLIMIT_NOFILE, &rLimit)

		if err != nil {
			fmt.Println("Error Getting Rlimit ", err)
		}
		fmt.Println("Rlimit Final", rLimit)
		fmt.Println("Rlimit Final", rLimit)
	*/
}
