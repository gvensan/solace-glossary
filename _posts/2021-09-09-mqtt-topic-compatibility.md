---
layout: post
title: "MQTT Topic Compatibility"
excerpt: "To allow compatibility with MQTT topics, which permit empty topic levels (for example, /a/b, a//b, or a/b/), Solace PubSub+ Version 7.1.1 or greater also allow empty topic levels in SMF topics. <br/><br/>However, there are some limitations to using empty topic levels with SMF topics:<br/>- Client applications using Solace messaging APIs can publish to topics with empty levels, but they can't use topic subscriptions with empty levels.<br/>- In ACL profiles, SMF topic exceptions may not have empty topic levels (for publishing or subscribing)."
categories:
  - "Messaging System"
references:
  - "https://docs.solace.com/PubSub-Basics/SMF-Topics.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: mqtt-topic-compatibility
---
