---
layout: post
title: "Message Spooling"
excerpt: "As a Solace PubSub+ event broker receives a Guaranteed message (that is, messages with persistent or non-persistent delivery modes), it processes the message to determine if there are any registered topic subscriptions or queues that match the destination the message was published to. If there is a topic subscription match or a matching queue on the event broker, the message and all the matches are spooled, and then the event broker acknowledges receipt of the message. <br/><br/>After acknowledging the message, the event broker attempts to deliver it to all the matching clients and event brokers. As each client and event broker acknowledges receipt of the message, the associated match is deleted from the match list of the message. Once there are no matches left associated with a message, the message itself is deleted from the spool."
categories:
  - "Message Delivery"
references:
  - "https://docs.solace.com/PubSub-Basics/Message-Spooling.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: message-spooling
---
