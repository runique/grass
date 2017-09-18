package models

import (
	"fmt"

	"time"

	"github.com/astaxie/beego"

	. "grass/utils"

	"gopkg.in/mgo.v2-unstable"
	"gopkg.in/mgo.v2-unstable/bson"
)

type S12Mongo struct {
	MyMongo
}

var (
	MyS12Mongo *S12Mongo
)

func InitS12Mongo() {
	MyS12Mongo = &S12Mongo{}
	MyS12Mongo.Init()
}

func (m *S12Mongo) Init() {
	m.dbConnectRetryInterval, _ = beego.AppConfig.Int("dbconnectretryinterval")
	m.dbUrl = beego.AppConfig.String("s12mongodburl")
	m.mgoSessionNum, _ = beego.AppConfig.Int("s12mgosessionnum")

	fmt.Println("dbConnectRetryInterval:", m.dbConnectRetryInterval,
		"s12mongodburl:", m.dbUrl, "s12mgosessionnum:", m.mgoSessionNum)

	m.MyMongo.Init()
	//m.ensureFamilyInfoIndex()

}

func (m *S12Mongo) getSession() (*mgo.Session, error) {
	session, err := m.MyMongo.getSession()
	if err == nil {
		AllocMgoStat(true)
	} else {
		AllocMgoStat(false)
	}

	return session, err
}

func (m *S12Mongo) yieldMdbSession(session *mgo.Session, err error, beginTm time.Time) {
	m.MyMongo.yieldMdbSession(session)
	StatDbReq(GetFuncName(2), err == nil, beginTm)
}

func (m *S12Mongo) ensureFamilyInfoIndex() error {
	session, err := m.getSession()
	if err != nil {
		fmt.Println(err)
		return err
	}
	beginTm := time.Now()
	defer m.yieldMdbSession(session, err, beginTm)

	c := session.DB(s12db).C(familyinfo)

	keys := []string{"uuid", "familyid"}

	for _, key := range keys {
		index := mgo.Index{
			Key:        []string{key},
			Unique:     true,
			DropDups:   false,
			Background: true,
			Sparse:     true,
			Name:       "uuid_1_familyid_1",
		}

		err = c.EnsureIndex(index)
		if err != nil {
			panic(err)
		}
	}

	return nil
}

func (m *S12Mongo) ensureFamilyInfoIndex2() error {
	session, err := m.getSession()
	if err != nil {
		fmt.Println(err)
		return err
	}
	beginTm := time.Now()
	defer m.yieldMdbSession(session, err, beginTm)

	db := session.DB(s12db)

	result := bson.M{}

	cmd := `  {
	       createIndexes: "familyinfo",
	       indexes: [
	           {
	               key: {
	   		"uuid" : 1,
	   		"familyid" : 1
	               }
	           }
	       ]
	     }`

	err = db.Run(cmd, &result)
	if err != nil {
		beego.Error(err)
		return err
	}

	return nil
}

func (m *S12Mongo) SaveFamilyInfo(familyId int, bs map[string]interface{}) error {
	session, err := m.getSession()
	if err != nil {
		return nil
	}
	beginTm := time.Now()
	defer m.yieldMdbSession(session, err, beginTm)

	c := session.DB(s12db).C(familyinfo)

	colQuerier := bson.M{"familyid": familyId}

	change := bson.M{"$set": bs}

	_, err = c.Upsert(colQuerier, change)
	if err != nil {
		beego.Error(err)
		return err
	}

	//beego.Info("Inside SaveFamilyInfo(), familyId:", familyId)
	return nil
}

func (m *S12Mongo) SaveUuidInfo(uuid string, familyId int, bs map[string]interface{}) error {
	session, err := m.getSession()
	if err != nil {
		return nil
	}
	beginTm := time.Now()
	defer m.yieldMdbSession(session, err, beginTm)

	c := session.DB(s12db).C(uuidinfo)

	colQuerier := bson.M{"familyid": familyId}

	change := bson.M{"$set": bs}

	_, err = c.Upsert(colQuerier, change)
	if err != nil {
		beego.Error(err)
		return err
	}

	//beego.Info("Inside SaveUuidInfo(), familyId:", familyId)
	return nil
}
