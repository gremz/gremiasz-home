---
layout: post
title:  "IE8 Background Opacity Issue"
date:   2014-07-21 17:00:00
categories: issues, ie8
---

I recently came across an issue where opacity would not be applied to large containers in IE8. This came about
attempting to add a large overlay behind custom modals/dialogs. Even with the addition of the Microsoft <pre>-ms</pre> prefix
when scaled large enough it would fail. I couldn't find much information about this except for [a comment on a Lightbox plugin][lightbox-comment] on the Drupal website. 

[lightbox-comment]: https://www.drupal.org/node/376050