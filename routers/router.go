package routers

import (
	"grass/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})

	beego.Router("/grass/setfamilyinfo", &controllers.S12Controller{}, "get:SetFamilyInfoByGet")
	//beego.Router("/grass/setfamilyinfo", &controllers.S12Controller{}, "post:SetFamilyInfoByPost")
	//beego.Router("/media/delportrait", &S12Controller{}, "post:ApiDelPortrait")
}
