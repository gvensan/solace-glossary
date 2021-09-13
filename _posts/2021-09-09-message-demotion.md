---
layout: post
title: "Message Demotion"
excerpt: "Message demotion is the situation where the producer sends Persistent messages, and there are consumers that want to receive these messages, but can tolerate lost messages. These consumers can add a topic subscription matching these messages, and receive them in real time as Direct messages. These consumers won't back pressure the publisher application, and if they go offline, those consumers will simply miss messages."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/PubSub-Basics/Core-Concepts-Message-Delivery-Modes.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: message-demotion
---
