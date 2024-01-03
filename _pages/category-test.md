---
title: "test"
layout: archive
permalink: /test
sidebar:
    nav: "sidebar-category"
---


{% assign posts = site.categories.test %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
