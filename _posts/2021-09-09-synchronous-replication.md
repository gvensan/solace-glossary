---
layout: post
title: "Synchronous Replication"
excerpt: "A message or transaction is not considered persisted until it has been confirmed to be stored on both the active and standby sites. While providing a greater guarantee that the published message or transaction will not be lost in an uncontrolled fail-over, synchronous replication incurs a performance penalty for the publisher, especially blocking publishers. This is because the publisher has to wait for communication between the two replication sites to complete before publishing the next message or transaction."
categories:
  - "Disaster Recovery"
tags:
  - "DR"
references:
  - "https://docs.solace.com/Overviews/Data-Center-Replication-Overview.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: synchronous-replication
---
