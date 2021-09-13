---
layout: post
title: "Message Quality of Service"
excerpt: "Messages can be classified as Persistent (Guaranteed) or Non-Persistent (Direct) by the message producer.<br/><br/>Guaranteed messages are spooled to non-volatile storage on the broker, and are kept until the broker has verified the successful delivery of those messages to all clients and downstream event brokers.<br/><br/>Direct messages are delivered to subscribing clients in the order in which producers publish them. They are not spooled to non-volatile storage, and do not require acknowledgment."
categories:
  - "Overview"
references:
  - "https://docs.solace.com/PubSub-Basics/Core-Concepts-Messaging.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: message-quality-of-service
---
