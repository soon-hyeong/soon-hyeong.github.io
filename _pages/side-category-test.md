---
permalink: /archive/
title: "side-category-test"
last_modified_at: 2022-05-27T11:59:26-04:00
---

{% assign posts = site.categories.java %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}