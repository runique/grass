#!/bin/bash
#set -x


PROC=grass

#sysctl -w net.ipv4.tcp_timestamps=1
#sysctl -w net.ipv4.tcp_tw_recycle=1

if [ -f $PROC ]
then
    NUM=0
    if test -n "${USER}"; then
	    NUM=`ps -fu ${USER} |grep $PROC |grep -v grep|wc -l`
    else 
	    NUM=`ps -f |grep $PROC |grep -v grep|wc -l`
    fi

	if [ $NUM -le 0 ]
	then
		nohup ./$PROC >> grassTerminal.out&
	fi
fi
