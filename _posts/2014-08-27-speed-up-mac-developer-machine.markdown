---
layout: post
title:  "Speed up your Mac with purge"
date:   2014-08-27 10:21:00
categories: utilities
---

I tend to keep my work laptop powered on for sometimes weeks at a time, only putting it to sleep when moving between
locations. At times even with 16gb of RAM it can slow down quite a bit from constantly open applications and starting and shutting down VMs. I came across the "purge" command when searching for answers and it appears to do the job. While this is not something you should [constantly][cnet] refer to I found it useful to run every other week or so.

To free up space simply run the "purge" command in Terminal (you may need to run this with sudo if permission is denied). This process can take a minute or two depending on the amount of space which needs to be inspected. You can open up the Activity Monitor and watch the "Free" memory rise and the "Inactive" memory drop.

[cnet]: http://www.cnet.com/news/the-necessity-of-regular-use-of-the-purge-command-in-os-x/