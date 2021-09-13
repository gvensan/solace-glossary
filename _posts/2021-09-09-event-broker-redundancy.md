---
layout: post
title: "Event Broker Redundancy"
excerpt: "Solace PubSub+ software event brokers support an active/standby redundancy model. With this model, a primary event broker provides messaging services to clients, while a backup event broker waits in standby mode—it only provides service should the primary event broker fail. A third event broker acts as a monitoring node, to act as a tie-breaker and prevent split-brain scenarios that would otherwise cause both the primary and backup event broker to become active simultaneously."
categories:
  - "Messaging System"
references:
  - "https://docs.solace.com/Overviews/SW-Broker-Redundancy-and-Fault-Tolerance.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: event-broker-redundancy
---
