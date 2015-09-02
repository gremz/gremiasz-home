---
layout: post
title:  "Slow response times with .local domains"
date:   2015-08-02 11:12:00
categories: issues, environment issues
---

I recently started to research why my local Rails environment was experiencing slow response times. After some digging around on Stackoverflow I came to find out that the .local domain is normally reserved for the Bonjour service on Macs. After updating my local hosts file from xxx.xxx.local to xxx.local.xxx I saw a major increase in response time in my Rails app.
