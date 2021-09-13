---
layout: post
title: "Message Promotion"
excerpt: "Message promotion is the situation where the producer sends Direct messages, and the consumer receives these message from a Guaranteed messaging endpoint. In this case the consumer will receive Non-Persistent messages.<br/><br/>This is a typical scenario in applications where there is a real-time publisher sending events, and it's critical that this publisher never be back pressured. However, at the same time, there are some consumers that would like to receive the data in the most fault tolerant, Persistent way."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/PubSub-Basics/Core-Concepts-Message-Delivery-Modes.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: message-promotion
---
