---
layout: post
title: "Publish the messages to a queue"
excerpt: "A publish Guaranteed messages to a queue<br/>- Used for point-to-point models.<br/>- The Solace message bus also acknowledges a Guaranteed message published to a queue to indicate that the system has received the message. However, messages published to a queue are more tightly coupled than those published to a topic. Therefore, if the queue doesn't exist, or is not able to spool the message (perhaps if it's shutdown or over quota), then the Solace message bus rejects the message, and the publishing client application has this immediate feedback. A message that is published to a queue can be consumed by a single consumer."
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: publish-the-messages-to-a-queue
---
