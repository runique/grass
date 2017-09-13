package controllers

import (
	"github.com/astaxie/beego"
)

func init() {

}

type S12Controller struct {
	beego.Controller
}

func (this *S12Controller) Get() {
	this.Ctx.Output.Body([]byte("You should use POST method!"))
}

func (this *S12Controller) SetFamilyInfoByGet() {
	beego.Info("Inside SetFamilyInfoByGet()")
	this.Ctx.Output.Body([]byte("You should use POST method!"))
}

func (this *S12Controller) SetFamilyInfoByPost() {
	beego.Info("Inside SetFamilyInfoByPost()")
	/*
		var err error

		defer func() {
			if err != nil {
				beego.Error(err)
				this.SendGetPortraitRsp(-1, err.Error(), "")
			}
		}()

		getPortraitReq := &GetPortraitReq{}
		err = json.Unmarshal(this.Ctx.Input.RequestBody, getPortraitReq)
		if err != nil {
			return
		}

		var familyId uint64
		familyId, err = strconv.ParseUint(getPortraitReq.FamilyId, 10, 32)
		if err != nil {
			return
		}

		var imgContent []byte
		imgContent, _, err = MyPortraitMongo.GetPortrait2(uint32(familyId))
		if err != nil {
			return
		}

		var base64Data string
		base64Data = base64.StdEncoding.EncodeToString(imgContent)
		if err != nil {
			return
		}

		this.SendGetPortraitRsp(0, "OK", base64Data)
	*/
}
