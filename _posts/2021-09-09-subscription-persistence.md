---
layout: post
title: "Subscription Persistence"
excerpt: "In a DMR Cluster, each event broker in a node persists its own Guaranteed subscriptions, but not those propagated to it by other nodes in the event mesh. When subscriptions propagate to an HA node, both brokers of that node learn of the subscriptions, regardless of which of the mates in the HA pair is currently active. Both brokers stay up-to-date with the overall network subscription set at the same time."
categories:
  - "High Availability"
references:
  - "https://docs.solace.com/Configuring-and-Managing/DMR-Subscription-Mgmt.htm#Subscription_Persistence"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: subscription-persistence
---
