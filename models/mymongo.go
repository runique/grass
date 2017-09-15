package models

import (
	"errors"
	"fmt"

	"time"

	"github.com/astaxie/beego"
	"gopkg.in/mgo.v2-unstable"
)

type MyMongo struct {
	origSession  *mgo.Session
	sessionChans chan *mgo.Session

	dbConnectRetryInterval int
	dbUrl                  string
	mgoSessionNum          int
}

func (m *MyMongo) Init() {
	m.createSession()

	m.sessionChans = make(chan *mgo.Session, m.mgoSessionNum)
	for i := 0; i < m.mgoSessionNum; i++ {
		m.sessionChans <- nil
	}

	go m.checkAndConnectDaemon()

}

func (m *MyMongo) checkAndConnectDaemon() {
	for _ = range time.NewTicker(time.Duration(m.dbConnectRetryInterval) * time.Second).C {
		if m.origSession == nil {
			beego.Info("Try create mgo origSession....")
			err := m.createSession()
			if err != nil {
				beego.Error(err)
				continue
			}
		}

		session, err := m.getSession()
		if err != nil {
			continue
		}

		err = session.Ping()
		if err != nil {
			beego.Warn("Ping mongodb failed!")
		}

		m.yieldMdbSession(session)
	}

}

func (m *MyMongo) createSession() error {
	if m.origSession != nil {
		return errors.New("The original session ever created!")
	}

	var err error
	m.origSession, err = mgo.DialWithTimeout(m.dbUrl, 3*time.Second)
	if err != nil {
		beego.Error("Dial failed:", err, ", url:", m.dbUrl)
		return err
	}
	m.origSession.SetMode(mgo.Eventual, true)
	fmt.Println("The origSession of mgo to ", m.dbUrl, " created!")
	beego.Info("The origSession of mgo to ", m.dbUrl, " created!")

	return nil
}

func (m *MyMongo) yieldMdbSession(session *mgo.Session) {
	session.Close()
	m.sessionChans <- nil
}

func (m *MyMongo) getSession() (*mgo.Session, error) {
	var session *mgo.Session

	if m.origSession == nil {
		beego.Error("The original session for mongodb has not been created!")
		return nil, errors.New("The original session for mongodb has not been created!")
	}

	select {
	case session = <-m.sessionChans:
		session = m.origSession.Copy()

	case <-time.After(time.Duration(time.Duration(2) * time.Second)):
		beego.Warn("Get mgo-session timeout!")
		return nil, errors.New("Get mgo-session timeout!")
	}

	return session, nil
}
