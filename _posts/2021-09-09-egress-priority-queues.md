---
layout: post
title: "Egress Priority Queues"
excerpt: "For a published message to be delivered to a client, it passes through the queuing structure shown in the Egress Client Queue Hierarchy.<br/><br/>The message first passes through one of the five per-client priority data queues. A scheduler then selects it and places it into a single, per-client Transmission Control Protocol (TCP) transmit queue."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/Configuring-and-Managing/Managing-Event-Delivery-Resources.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: egress-priority-queues
---
