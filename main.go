package main

import (
	"errors"
	"fmt"
	_ "grass/routers"

	. "grass/controllers"
	. "grass/models"
	. "grass/utils"

	"net/http"

	"github.com/astaxie/beego"
)

func initLog() {
	beego.BeeLogger.DelLogger("console")
	err := beego.BeeLogger.SetLogger("file", `{"filename":"log/grass.log"}`)
	if err != nil {
		fmt.Printf(err.Error())
	}

	logLevel, _ := beego.AppConfig.Int("loglevel")
	if logLevel < beego.LevelEmergency || logLevel > beego.LevelDebug {
		panic(errors.New("Invalid loglevel!"))
	}
	beego.BeeLogger.SetLevel(logLevel)
}

type MyHandler struct{}

var mux map[string]func(http.ResponseWriter, *http.Request)

func initAndStartS12Http() {
	server := http.Server{
		Addr: fmt.Sprintf(":%d", 8081),
		/* Maybe will set the two fields sometime
		ReadTimeout:  time.Duration(basicConf.AcceptHttpReadTimeout) * time.Second,
		WriteTimeout: time.Duration(basicConf.AcceptHttpWriteTimeout) * time.Second,
		*/
		Handler: &MyHandler{},
	}

	mux = make(map[string]func(http.ResponseWriter, *http.Request))

	mux["/grass/setfamilyinfo"] = SetFamilyInfoByPost2
	mux["/grass/getfamilyinfo"] = GetFamilyInfoByPost
	mux["/grass/settransferflag"] = SetTransferFlagByPost

	go server.ListenAndServe()
}

func (*MyHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if h, ok := mux[r.URL.Path]; ok {
		h(w, r)
		return
	}

	fmt.Println("Inside ServerHTTP(), no matched pattern found!")

}

func main() {
	initLog()

	InitS12Mongo()

	initAndStartS12Http()

	SetRlimit()

	beego.Run()
}
