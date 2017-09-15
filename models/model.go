package models

const (
	LenOffset  = 0
	CmdOffset  = 4
	FlagOffset = 6
	//UnionOffset = 7
	SeqOffset   = 7
	MagicOffset = 11

	CliHeadSize        = 7
	GeneralSvrHeadSize = 7
	MediaSvrHeadSize   = 15

	OwnerRole       = 5
	ParticipantRole = 6

	SERVICE_TYPE_MEDIA = 14

	maxBoardMsgNumEachFamily    = 500
	maxMoodMsgNumEachFamily     = 100
	maxMoodCommentNumEachFamily = 100
	maxMoodLikeNumEachFamily    = 100

	voiceDataExpiration = 3600 // second(s)

	s12db      = "s12db"
	familyinfo = "familyinfo"
	uuidinfo   = "uuidinfo"
)

type CliHead struct {
	cmd uint16
	len uint32
}

type MediaHead struct {
	cmd   uint16
	len   uint32
	seq   uint32
	magic uint32
}

var (
	DefaultUserName = "未名"
)
