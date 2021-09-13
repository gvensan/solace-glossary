---
layout: post
title: "Queue Ownership"
excerpt: "Queue ownership enatils all permissions to consume, delete, or modify topics in the queue. The ownership of a queue is established in the following manner:<br/><br/>1. If a client application dynamically provisions a queue through a Solace messaging API, the client username associated with the client is automatically given ownership of that queue.<br/>2. If a CLI user manually provisions a queue through the Solace CLI, no client username is automatically given ownership of that queue.<br/>3. Any CLI user with Read-Write or Admin access to the Message VPN that the queue belongs to has full permissions on the queue (that is, management has ownership)."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/Configuring-and-Managing/Configuring-Queues.htm#Configur18"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: queue-ownership
---
