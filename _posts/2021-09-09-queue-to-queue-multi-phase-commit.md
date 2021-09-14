---
layout: post
title: "Queue-to-Queue Multi-Phase Commit"
excerpt: "If multiple queues are set with reject-msg-to-sender-on-discard, a failure to spool the same message in any one of the queues with the reject-on-discard setting, then that message is rolled back for all co-operating queues, and the producer is sent a negative acknowledgment."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/PubSub-ConceptMaps/Event-Stream-Maps.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: queue-to-queue-multi-phase-commit
---
