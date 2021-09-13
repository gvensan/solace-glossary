---
layout: post
title: "DTO Priority"
excerpt: "To control which client can receive a DTO message, subscribing clients can set a priority through a session property. The subscriber priority levels range from 1 (the highest) to 4 (the lowest).<br/><br/>When a DTO message is published, a single local client with the highest subscriber priority level will receive the message. In a situation where the highest local subscriber priority level is shared by multiple clients, a single client is chosen in a round-robin fashion."
categories:
  - "Message Delivery"
references:
  - "https://docs.solace.com/Configuring-and-Managing/DTO.htm?Highlight=DTO%20Priority"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: dto-priority
---
