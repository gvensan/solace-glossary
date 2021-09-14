---
layout: post
title: "Reserved Topics"
excerpt: "Solace PubSub+ uses a number of reserved topics to implement some specific messaging features. Each of these topic subscriptions begin with the # character, which is then followed by a specific, reserved sequence of characters. Some special topics only use a reserved string for the first hierarchical level of the topic subscription, others may reserve more than one level.<br/><br/>Any topic starting with # is reserved for special topics. Topics defined by applications must not start with #. As an exception to this rule—with request/reply across multi-node routing networks, where a subscription propagation delay may occur—topics of the form #P2P/v:routerName/<something> can be used."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/PubSub-Basics/Reserved-Topics.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: reserved-topics
---
