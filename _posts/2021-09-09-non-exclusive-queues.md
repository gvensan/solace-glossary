---
layout: post
title: "Non-Exclusive Queues"
excerpt: "Multiple consumers can bind to a non-exclusive queue. Each consumer is serviced in round‑robin fashion. This provides load-balancing; however, if a connection fails, then unacknowledged messages are delivered to another consumer with the re-delivered flag set."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/PubSub-Basics/Endpoints.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: non-exclusive-queues
---
