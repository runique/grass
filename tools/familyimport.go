package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	//"strconv"
	"bufio"
	"encoding/json"
	"errors"
	"flag"
	"os"
	"time"

	"github.com/astaxie/beego"
)

var (
	httpClient *http.Client

	totalRecordNum    int
	importedRecordNum int

	importOver chan int
)

type GeneralRsp struct {
	RetCode int
	Desc    string
}

func initHttp() {
	httpClient = createHTTPClient()
}

func createHTTPClient() *http.Client {
	client := &http.Client{
		Transport: &http.Transport{
			MaxIdleConnsPerHost: 1,
		},
		Timeout: time.Duration(0) * time.Second,
	}

	return client
}

func postHttp(url *string, sendBody []byte, getResult bool) ([]byte, int32, error) {
	//beego..Info("request data:%s\n", sendBody)
	//fmt.Println("", string(sendBody))
	httpReq, err := http.NewRequest("POST", *url, bytes.NewBuffer(sendBody))
	if err != nil {
		beego.Error(err)
		return []byte(err.Error()), -1, err
	}

	httpReq.Header.Set("X-Custom-Header", "myvalue")
	httpReq.Header.Set("Content-Type", "application/json")
	//httpReq.Header.Set("Connection", "close")

	httpRsp, err := httpClient.Do(httpReq)

	if err != nil {
		beego.Error(err)

		//if neterr, ok := err.(net.Error); ok && neterr.Timeout() {
		if _, ok := err.(net.Error); ok {
			beego.Error("net Error")
		}
		return []byte(err.Error()), -2, err
	}
	//defer httpRsp.Body.Close()

	var httpRspBody []byte
	if getResult {
		//beego.Info("response Status:", httpRsp.Status)
		//beego.Info("response Headers:", httpRsp.Header)

		httpRspBody, err = ioutil.ReadAll(httpRsp.Body)
		if err != nil {
			beego.Error(err)
			return []byte(err.Error()), -3, err
		}

		generalRsp := &GeneralRsp{}
		err := json.Unmarshal(httpRspBody, generalRsp)
		if err != nil {
			beego.Error(err)
			return nil, -1, err
		}

		if generalRsp.RetCode != 0 {
			beego.Error("Import family-info failed:%s", generalRsp.Desc)
		}

		//beego.Info("response Body:", string(httpRspBody))
	}

	return httpRspBody, 0, nil
}

func initLog() {
	beego.BeeLogger.DelLogger("console")
	err := beego.BeeLogger.SetLogger("file", `{"filename":"log/familyimport.log"}`)
	if err != nil {
		fmt.Printf(err.Error())
	}

	logLevel := 6
	if logLevel < beego.LevelEmergency || logLevel > beego.LevelDebug {
		panic(errors.New("Invalid loglevel!"))
	}
	beego.BeeLogger.SetLevel(logLevel)
}

func countFileLineNum(fileName string) int {
	importFile, _ := os.Open(fileName)
	defer importFile.Close()

	fscanner := bufio.NewScanner(importFile)
	lineNum := 0
	for fscanner.Scan() {
		fscanner.Text()

		lineNum++
	}

	return lineNum
}

func importFamilyInfo(url string, fileName string) {
	initHttp()

	importFile, _ := os.Open(fileName)
	defer importFile.Close()

	fscanner := bufio.NewScanner(importFile)

	for fscanner.Scan() {
		str := fscanner.Text()
		//fmt.Println(str)
		_, _, err := postHttp(&url, []byte(str), true)
		if err != nil {
			panic(err)
		}

		importedRecordNum++
	}

	importOver <- 1
}

func init() {
	importOver = make(chan int)

}

func main() {
	initLog()

	grassUrl := flag.String("server", "http://10.20.110.33:8081", "The http server to which family-info imported")
	fileName := flag.String("file", "group47.family", "The file to be imported")

	flag.Parse()

	*grassUrl += "/grass/setfamilyinfo"

	fmt.Println("Count familyNum....")
	familyNum := countFileLineNum(*fileName)
	fmt.Println("Count familyNum done, the number of family to be imported:", familyNum)

	go importFamilyInfo(*grassUrl, *fileName)

	for {
		select {
		case _ = <-importOver:
			fmt.Printf("\nimportedNum| totalNum:   %d| %d\n", importedRecordNum, familyNum)

			fmt.Printf("Import families done.")
			goto readover

		case <-time.After(time.Duration(time.Duration(2) * time.Second)):
			fmt.Printf("\rimportedNum| totalNum:   %d| %d", importedRecordNum, familyNum)
		}
	}

readover:

	fmt.Print("Press 'Enter' to continue...")
	bufio.NewReader(os.Stdin).ReadBytes('\n')

}
