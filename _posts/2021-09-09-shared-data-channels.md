---
layout: post
title: "Shared Data Channels"
excerpt: "A DMR cluster link is composed of:<br/>- one control channel<br/>- one client profile<br/>- one data channel per Message VPN. <br/><br/>A data channel is made up of a bridge and a queue. If a cluster link goes to a node that is part of a replication group, then that link's data channels are shared with the link to the other node of the replication group."
categories:
  - "High Availability"
tags:
  - "DMR"
references:
  - "https://docs.solace.com/Configuring-and-Managing/DMR-with-DR-Cluster-Link-Config.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: shared-data-channels
---
