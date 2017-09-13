package main

import (
	"errors"
	"fmt"
	_ "grass/routers"

	. "grass/utils"

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

func main() {
	initLog()

	SetRlimit()

	beego.Run()
}
