---
layout: post
title: "Spool Files Thresholds"
excerpt: "Guaranteed messages are spooled to an event broker through the use of internal spool files. If event broker’s spool files are all in use, it cannot receive any more messages until some messages are acknowledged, thereby freeing some spool files; any further ingress messages are discarded, and nacks are returned to the publishing clients to inform them of the discards.<br/><br/>Spool Files Thresholds setting indicates when events are generated to warn about the spool file usage."
categories:
  - "Administration"
references:
  - "https://docs.solace.com/System-and-Software-Maintenance/Configuring-System-Event-Thresholds.htm#spool-file-thresholds"
date: Thu, 09 Sep 2021 00:00:00 GMT
author: gvensan
comments: true
published: true
share: true
permalink: spool-files-thresholds
---
