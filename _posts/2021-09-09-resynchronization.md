---
layout: post
title: "Resynchronization"
excerpt: "In a HA setup, once the failed event broker comes back on-line, it will use the mate link VRF to resynchronize its message-spool contents to match the active event broker. <br/><br/>Resynchronization is not a service-affecting operation, and the backup event broker continues to service connected clients while the resynchronization is taking place. However, the primary event broker is not able to provide service to clients during the resynchronization process."
categories:
  - "High Availability"
references:
  - "https://docs.solace.com/Overviews/SW-Broker-Redundancy-and-Fault-Tolerance.htm"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: resynchronization
---
