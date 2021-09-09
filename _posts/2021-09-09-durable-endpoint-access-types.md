---
layout: post
title: "Durable Endpoint Access Types"
excerpt: "A durable endpoint has an associated access type which determines how messages are delivered to bound consumer flows. Durable endpoints can be assigned one of the following access types:<br/>- Exclusive: For a queue, multiple subscriber flows established by clients can be bound, but only one flow out of all the bound flows is able to receive messages at a time.<br/>- Non‑exclusive: For either queues or topic endpoints, multiple consumers can bind to a non-exclusive durable topic endpoint, and each is serviced in round‑robin fashion"
categories:
  - "Message Delivery"
references:
  - "https://docs.solace.com/PubSub-Basics/Endpoints.htm#Queue_Access_Types"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: durable-endpoint-access-types
---
