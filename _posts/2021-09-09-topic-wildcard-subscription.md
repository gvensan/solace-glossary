---
layout: post
title: "Topic Wildcard Subscription"
excerpt: "When the * and > characters are used in topic subscriptions, they function as wildcards, which affect the topic matches that may occur.<br/><br/>About *:<br/>-  A * by itself at a level within a subscription topic (as in, animals/*/cats, or animals/domestic/*) indicates a wildcard match at that level<br/>- When * is preceded by a topic prefix at a level within a subscription topic (as in, animals/red*/wild) indicates a 'prefix and 0 or more” match at that level<br/>- The * may be used at multiple levels within a subscription topic, with or without topic prefixes (as in, animals/*/cats/*)<br/>- Use of * in an arbitrary location within a level, and not covered by the previous rules, supports general sub-string matching.<br/><br/>About >:<br/>- When > appears by itself at the last level of a subscription topic (as in, animals/domestic/>) provides a “one or more” wildcard match for any topics with an identical prefix to the subscription<br/>- A > that appears anywhere else other than by itself at the last level of a subscription topic (as in animals> and animals/domestic>)  in the string is treated as the > character rather than a wildcard<br/>- The > and * characters may be used together within a subscription topic (example animals/*/cats/> )"
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/PubSub-Basics/Wildcard-Charaters-Topic-Subs.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: topic-wildcard-subscription
---
