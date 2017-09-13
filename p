#!/bin/bash
#set -x

PROC=grass

ps axu |grep ${PROC} | grep -v grep
