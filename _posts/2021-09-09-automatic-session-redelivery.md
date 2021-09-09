---
layout: post
title: "Automatic Session Redelivery"
excerpt: "When PubSub+ detects a session disconnect-reconnect event, the queue endpoint will automatically replay all messages to the consumer that were in flight, or being processed by the consumer, but were not acknowledged. All replayed messages on the session have a flag indicating they were replayed due to consumer session restart."
categories:
  - "Message Exchange"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: automatic-session-redelivery
---
