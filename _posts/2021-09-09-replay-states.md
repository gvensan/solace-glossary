---
layout: post
title: "Replay States"
excerpt: "Message Replay states are as follows:<br/><br/>- Complete: No replay is in progress.<br/>- Initializing: All live messages are being deleted from the endpoint before a replay starts.<br/>- Active: The endpoint is currently under replay. Message replay is processing the replay log, and replayed messages are being added to the endpoint.<br/>- Pending Complete: A replay has reached the end of the replay log, but there are still unacked replayed messages on the endpoint. New live messages are being delivered to the endpoint. However, it's still possible that the replay can fail and have the unacked replayed messages be deleted from the endpoint.<br/>- Failed: A replay has failed and is pending acknowledgment of an unbind request it sent as a failure indication."
categories:
  - "Message Replay"
references:
  - "https://docs.solace.com/Configuring-and-Managing/Msg-Replay-Concepts-Config.htm#Replay"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: replay-states
---
