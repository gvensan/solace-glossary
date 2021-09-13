---
layout: post
title: "Overbooking Event Broker Resources"
excerpt: "Message VPNs on the Solace PubSub+ can be configured to control how  broker resources are consumed and the supported modes are:<br/><br/>- a full overbooking of all event broker resources is allowed<br/>This means that any Message VPN can consume all available event broker resources. This is the event broker default.<br/><br/>- partial overbooking of event broker resources by Message VPNs is allowed<br/>This means that no single Message VPN may consume all resources, but their configured resource consumption limits are high enough that, in combination, they could reach the system limit.<br/><br/>- no overbooking of event broker resources is allowed<br/>This means that the sum of the configured consumption limits of all Message VPNs will not exceed the system limits."
categories:
  - "Administration"
references:
  - "https://docs.solace.com/Configuring-and-Managing/Managing-Consumption-of-Event-Broker-Resources.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: overbooking-event-broker-resources
---
