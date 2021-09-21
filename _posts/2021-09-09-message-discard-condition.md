---
layout: post
title: "Message Discard Condition"
excerpt: "A durable queue can be configured how to handle ingress messages discards that occur due to one or more of the following conditions:<br/><br/>- adding the published message will exceed the configured message quota for the queue<br/>- the published message exceeds the maximum message size allowed for the queue<br/>- the client published the message to a topic it has also subscribed to and has an active flow with 'No Local Delivery'."
categories:
  - "Message Delivery"
references:
  - "https://docs.solace.com/Configuring-and-Managing/Configuring-Queues.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: message-discard-condition
---
