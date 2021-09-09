---
layout: post
title: "Event Routing"
excerpt: "To determine the path on which to deliver events to interested consumers, the event broker inspects the event topic (which describes the data within the event) and matches it to the consumers' event subscriptions (which describe what data the consumer is interested in). The event topic provides a mechanism to make forwarding decisions based on information about the data without deserializing, decoding, and interpreting the entire data set. <br/><br/>Event routing is different from REST-style point-to-point routing where the sender specifies the destination in that the event producer specifies only the routing topic, and the intermediary nodes (event brokers) route to all eligible destinations."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/Best-Practices/Topic-Architecture-Best-Practices.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: event-routing
---
