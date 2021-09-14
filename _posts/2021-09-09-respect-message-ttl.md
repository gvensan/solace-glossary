---
layout: post
title: "Respect Message TTL"
excerpt: "Respect message TTL, is a queue setting that ensures messages' TTL values are checked. If a message’s TTL is expired, it is either removed from the message spool and discarded, or, if the message is eligible for a DMQ, it is moved to a DMQ provisioned on the event broker. If a message does not have an assigned TTL, then it will never expire."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/Configuring-and-Managing/Configuring-Queues.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: respect-message-ttl
---
