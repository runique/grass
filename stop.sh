#!/bin/bash
#set -x

PROC=grass

echo "stoping ${PROC}...!"
user=`whoami`
PIDS=

if test -n "${USER}"; then
    PIDS=`ps -fu${user} |grep ${PROC} | grep -v grep | awk '{print $2}'`
else 
    PIDS=`ps -f |grep ${PROC} | grep -v grep | awk '{print $2}'`
fi 

KILL=0
for PID in $PIDS
do
        #kill -s USR2 $PID
        kill -15 $PID
		KILL=1
done

if [ $KILL = 1 ]
then
	echo "stop ${PROC} ok!"
else
    echo "Nothing stop!"
fi
