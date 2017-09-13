package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	//"strconv"
	"errors"
	"time"

	"github.com/astaxie/beego"
)

var (
	httpClient *http.Client
)

func initHttp() {
	httpClient = createHTTPClient()
}

func createHTTPClient() *http.Client {
	client := &http.Client{
		Transport: &http.Transport{
			MaxIdleConnsPerHost: 1,
		},
		Timeout: time.Duration(3) * time.Second,
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
	defer httpRsp.Body.Close()

	var httpRspBody []byte
	if getResult {
		beego.Info("response Status:", httpRsp.Status)
		beego.Info("response Headers:", httpRsp.Header)

		httpRspBody, err = ioutil.ReadAll(httpRsp.Body)
		if err != nil {
			beego.Error(err)
			return []byte(err.Error()), -3, err
		}

		beego.Info("response Body:", string(httpRspBody))
	}

	return httpRspBody, 0, nil
}

func initLog() {
	beego.BeeLogger.DelLogger("console")
	err := beego.BeeLogger.SetLogger("file", `{"filename":"log/test.log"}`)
	if err != nil {
		fmt.Printf(err.Error())
	}

	logLevel := 6
	if logLevel < beego.LevelEmergency || logLevel > beego.LevelDebug {
		panic(errors.New("Invalid loglevel!"))
	}
	beego.BeeLogger.SetLevel(logLevel)
}

func main() {
	initLog()

	initHttp()

	//url := "http://10.20.110.33:8089/paynotify?serverid=104701"
	url := "http://10.20.110.33:8089/paynotify"

	for i := 0; i < 10000; i++ {
		postHttp(&url, []byte(`{"serverId" : "47"}`), true)
	}

	for {
		time.Sleep(1 * time.Second)
	}

}
