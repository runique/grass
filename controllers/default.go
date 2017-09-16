package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	runMode := beego.AppConfig.String("runmode")

	if runMode == "s12" {
		c.Ctx.Output.Body([]byte("The grass-server works."))
	} else {
		c.Data["Website"] = "beego.me"
		c.Data["Email"] = "astaxie@gmail.com"
		c.TplName = "index.tpl"
	}
}
