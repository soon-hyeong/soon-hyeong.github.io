---
title: Blog - minimal mistake 사이드바 카테고리에 포스트 갯수 추가하기
categories: 
  - Blog
tags:
  - Blog
  - jekyll
  - minimal mistake
  - sidebar navigation
  - sidebar navigation 포스팅 수
sitemap:
  changefreq: daily
  priority : 1.0
---

## minimal mistake 사이드바 카테고리에 포스트 갯수 추가하기
초보자가 jekyll과 minimal mistake를 사용하여 블로그를 설정하는 것은 쉽지 않고, 공식 문서를 읽는 것은 고통스럽다. 다행히도 다른 분들이 블로그를 통해서 많은 정보를 공유해주신 덕분에 지금의 간단한 블로그를 설정할 수 있었다. 하지만 단 하나, 사이드바 카테고리에 포스트의 갯수를 추가하는 것은 다른 블로그에서 본대로 설정이 잘 되지 않았다. 그래서 스스로 코드를 변경해보았고, 그것을 공유한다.

### 사이드바 카테고리에 포스트 갯수?
왼쪽의 사이드바를 본다면 java(1)과 같이 카테고리에 포스팅 갯수가 표시되어 있는 것을 볼 수 있다.

### 다 필요 없고 코드나 보여주셈
말이 길었다. 전체 코드는 아래와 같다. _include폴더에 nav_list파일에 원래 내용을 지우고, 복사 붙여넣기 하면 된다.
{% raw %}
```python
{% assign navigation = site.data.navigation[include.nav] %}
<nav class="nav__list">
  {% if page.sidebar.title %}<h3 class="nav__title" style="padding-left: 0;">{{ page.sidebar.title }}</h3>{% endif %}
  <input id="ac-toc" name="accordion-toc" type="checkbox" />
  <label for="ac-toc">{{ site.data.ui-text[site.locale].menu_label | default: "Toggle Menu" }}</label>
  <ul class="nav__items">
    {% for nav in navigation %}
      <li>
        {% if nav.url %}
          <a href="{{ nav.url | relative_url }}"><span class="nav__sub-title">{{ nav.title }}</span></a>
        {% else %}
          <span class="nav__sub-title">{{ nav.title }}</span>
        {% endif %}

        {% if nav.children != null %}
        <ul>
          {% for child in nav.children %}
          {% assign category = site.categories.[child.title] | where_exp: "item", "item.hidden != true" %}
            {%if category.size == null %}
              <li><a href="{{ child.url | relative_url }}"{% if child.url == page.url %} class="active"{% endif %}>{{ child.title }} (0)</a></li>
            {% else %}
              <li><a href="{{ child.url | relative_url }}"{% if child.url == page.url %} class="active"{% endif %}>{{ child.title }} ({{category.size}})</a></li>
            {% endif %}
          {% endfor %}
        </ul>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</nav>
```
{% endraw %}


### 약간의 설명
원래 코드에서 바뀐 부분은 아래쪽의 for문 안이다.

**원본**

{% raw %}
```python
          {% for child in nav.children %}
            <li><a href="{{ child.url | relative_url }}"{% if child.url == page.url %} class="active"{% endif %}>{{ child.title }}</a></li>
          {% endfor %}
```
{% endraw %}

**바뀐 부분**

{% raw %}
```python
          {% for child in nav.children %}
            {% assign category = site.categories.[child.title] | where_exp: "item", "item.hidden != true" %}
            {%if category.size == null %}
              <li><a href="{{ child.url | relative_url }}"{% if child.url == page.url %} class="active"{% endif %}>{{ child.title }} (0)</a></li>
            {% else %}
              <li><a href="{{ child.url | relative_url }}"{% if child.url == page.url %} class="active"{% endif %}>{{ child.title }} ({{category.size}})</a></li>
            {% endif %}
          {% endfor %}
```
{% endraw %}
각각의 카테고리를 찾은 뒤, if, else문을 사용하여 포스트가 아직 올라오지 않은 카테고리에는 0이 추가되고, 글이 있는 카테고리에는 포스트의 갯수를 추가해주었다. 

(여러 시도를 통하여 변수를 수정하다가 만든 코드라 문제가 있을 수 있습니다. 문제가 있다면 저도 알려주시기를 부탁드립니다.)