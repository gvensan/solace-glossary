---
layout: post
title: "Receive message"
excerpt: "The event broker can deliver the spooled message to a consuming client if:<br/>- that client has successfully established a connection to the same Message VPN;<br/>- is authorized to receive Guaranteed messages;<br/>- has created a consumer flow in that session to bind to the endpoint;<br/>- and its flow is chosen to be the active flow for the endpoint. That is, it's the flow out of all the flows currently bound to that endpoint that can deliver messages"
categories:
  - "Message Delivery"
references:
  - "https://docs.solace.com/PubSub-Basics/Basic-Guaranteed-Messsaging-Operation.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: receive-message
---
