---
layout: post
title: "Endpoint Permissions"
excerpt: "Specifies a permission that can be granted on an endpoint. <br/><br/>The permissions available at the following levels are:<br/><br/>- none—no access.<br/>- read-only—allows the messages only to be read; they cannot be removed or consumed from the message spool.<br/>- consume—allows messages to be browsed and consumed from the message spool.<br/>- modify-topic—allows the topics assigned to endpoints to be modified. Modify-topic also implicitly includes same permissions as consume.<br/>- delete—allows deleting queues or topic endpoints. Delete also implicitly includes same permissions as modify-topic."
categories:
  - "Message Exchange"
references:
  - "https://docs.solace.com/PubSub-Basics/Endpoints.htm?Highlight=Endpoint%20Permissions"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: endpoint-permissions
---
