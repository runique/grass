package controllers

import (
	"fmt"

	"github.com/astaxie/beego"

	"encoding/json"
	. "grass/models"

	"gopkg.in/mgo.v2-unstable/bson"

	"errors"
	"io/ioutil"
	"net/http"
)

type GeneralRsp struct {
	RetCode int
	Desc    string
}

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

func (this *S12Controller) SendGeneralRsp(retCode int, desc string) {
	rsp := &GeneralRsp{}
	rsp.RetCode = retCode
	rsp.Desc = desc

	//bs, _ := json.Marshal(rsp)
	//this.Ctx.Output.SetStatus(200)
	//this.Ctx.Output.Body(bs)

	this.Data["json"] = rsp
	this.ServeJSON()
}

func (this *S12Controller) SetFamilyInfoByPost() {
	//beego.Info("Inside SetFamilyInfoByPost()")

	var err error

	defer func() {
		this.Ctx.Output.Body([]byte("OK"))

		if err != nil {
			beego.Error(err)
			this.SendGeneralRsp(-1, fmt.Errorf("Import family-info failed:%s", err.Error()).Error())
		}
	}()

	var bdoc interface{}
	err = bson.UnmarshalJSON(this.Ctx.Input.RequestBody, &bdoc)
	if err != nil {
		return
	}

	bs := bdoc.(map[string]interface{})

	if _, ok := bs["groupid"]; ok {
		groupId := int(bs["groupid"].(float64))
		familyId := int(bs["familyid"].(float64))

		err = MyS12Mongo.SaveFamilyInfo(groupId, familyId, bs)
		if err != nil {
			return
		}
	} else {
		uuid := bs["uuid"].(string)
		familyId := int(bs["familyid"].(float64))

		err = MyS12Mongo.SaveUuidInfo(uuid, familyId, bs)
		if err != nil {
			return
		}
	}

	this.SendGeneralRsp(0, "OK")
}

func SetFamilyInfoByPost2(w http.ResponseWriter, r *http.Request) {
	//beego.Info("Inside SetFamilyInfoByPost2()")

	var err error

	defer func() {
		if err != nil {
			beego.Error(err)
			SendGeneralRsp2(-1, fmt.Errorf("Import family-info failed:%s", err.Error()).Error(), w)
		}
	}()

	var httpBody []byte
	httpBody, err = ioutil.ReadAll(r.Body)
	if err != nil {
		beego.Error(err)
		return
	}

	var bdoc interface{}
	err = bson.UnmarshalJSON(httpBody, &bdoc)
	if err != nil {
		return
	}

	bs := bdoc.(map[string]interface{})

	if _, ok := bs["groupid"]; ok {
		groupId := int(bs["groupid"].(float64))
		familyId := int(bs["familyid"].(float64))

		err = MyS12Mongo.SaveFamilyInfo(groupId, familyId, bs)
		if err != nil {
			return
		}
	} else {
		uuid := bs["uuid"].(string)
		familyId := int(bs["familyid"].(float64))

		err = MyS12Mongo.SaveUuidInfo(uuid, familyId, bs)
		if err != nil {
			return
		}
	}

	SendGeneralRsp2(0, "OK", w)
}

func GetFamilyInfoByPost(w http.ResponseWriter, r *http.Request) {
	//beego.Info("Inside GetFamilyInfo1()")

	var err error
	var groupId, familyId int
	var uuid string

	defer func() {
		if err != nil {
			beego.Error(err)
			SendGeneralRsp2(-1, fmt.Errorf("Get family-info(groupid:%d, uuid:%s, familyId:%d) failed:%s",
				groupId, uuid, familyId, err.Error()).Error(), w)
		}
	}()

	var httpBody []byte
	httpBody, err = ioutil.ReadAll(r.Body)
	if err != nil {
		beego.Error(err)
		return
	}

	var bdoc interface{}
	err = bson.UnmarshalJSON(httpBody, &bdoc)
	if err != nil {
		return
	}

	bs := bdoc.(map[string]interface{})

	if _, ok := bs["groupid"]; ok {
		groupId = int(bs["groupid"].(float64))

		if _, ok = bs["familyid"]; !ok {
			beego.Error("No familyid field in json!")
			err = errors.New("No familyid field in json!")
			return
		}

		familyId = int(bs["familyid"].(float64))

		familyInfo2 := &FamilyInfo2{}

		familyInfo2, err = MyS12Mongo.GetByGroupIdFamilyId(groupId, familyId)
		if err != nil {
			return
		}

		var bs []byte
		bs, err = json.Marshal(familyInfo2)
		if err != nil {
		} else {
			w.Write(bs)
		}

	} else {
		if _, ok = bs["uuid"]; !ok {
			beego.Error("No uuid field in json!")
			err = errors.New("No uuid field in json!")
			return
		}

		uuid = bs["uuid"].(string)

		var familyInfoLst []FamilyInfo1

		familyInfoLst, err = MyS12Mongo.GetByUuid(uuid)
		if err != nil {
			return
		}

		var bs []byte
		bs, err = json.Marshal(familyInfoLst)
		if err != nil {
		} else {
			w.Write(bs)
		}
	}
}

func SetTransferFlagByPost(w http.ResponseWriter, r *http.Request) {
	//beego.Info("Inside SetTransferFlagByPost()")

	var err error
	var groupId, familyId int
	var uuid string

	defer func() {
		if err != nil {
			beego.Error(err)
			SendGeneralRsp2(-1, fmt.Errorf("Get family-info(groupid:%d, uuid:%s, familyId:%d) failed:%s",
				groupId, uuid, familyId, err.Error()).Error(), w)
		}
	}()

	var httpBody []byte
	httpBody, err = ioutil.ReadAll(r.Body)
	if err != nil {
		beego.Error(err)
		return
	}

	var bdoc interface{}
	err = bson.UnmarshalJSON(httpBody, &bdoc)
	if err != nil {
		return
	}

	bs := bdoc.(map[string]interface{})

	if _, ok := bs["groupid"]; ok {
		groupId = int(bs["groupid"].(float64))

		if _, ok = bs["familyid"]; !ok {
			beego.Error("No familyid field in json!")
			err = errors.New("No familyid field in json!")
			return
		}

		familyId = int(bs["familyid"].(float64))

		err = MyS12Mongo.SetTransferFlagByGroup(groupId, familyId)
		if err != nil {
			return
		}

	} else {
		if _, ok = bs["uuid"]; !ok {
			beego.Error("No uuid field in json!")
			err = errors.New("No uuid field in json!")
			return
		}

		if _, ok = bs["familyid"]; !ok {
			beego.Error("No familyid field in json!")
			err = errors.New("No familyid field in json!")
			return
		}

		uuid = bs["uuid"].(string)
		familyId = int(bs["familyid"].(float64))

		err = MyS12Mongo.SetTransferFlagByUuid(uuid, familyId)
		if err != nil {
			return
		}
	}

	SendGeneralRsp2(0, "OK", w)

}

func SendGeneralRsp2(retCode int, desc string, w http.ResponseWriter) {
	rsp := &GeneralRsp{}
	rsp.RetCode = retCode
	rsp.Desc = desc

	bs, _ := json.Marshal(rsp)
	w.Write(bs)
}
