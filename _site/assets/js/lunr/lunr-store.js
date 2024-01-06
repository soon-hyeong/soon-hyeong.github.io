var store = [{
        "title": "JAVA - String 타입의 두가지 생성 방식",
        "excerpt":"String 타입의 두가지 생성 방식  자바에서 String은 기본형처럼 사용하는 리터럴 방식과 참조형, 즉 객체와 같이 생성하는 new 연산자 생성 방식이 있다.   1. 리터럴 방식     new 연산자 없이 생성이 가능     1 String str = \"abcde\";           String constant pool 메모리 영역에 저장            String constant pool 메모리 영역은 heap 메모리영역 내의 별도 영역에 위치           대부분의 String 객체는 위와 같이 리터럴 방식으로 생성   리터럴 방식의 메모리 관리            상수풀에 문자열의 값이 없을 경우, 값을 저장 후 메모리 주소를 반환한다.       상수풀에 해당 문자열의 값이 있을 경우 해당 문자열의 메모리 주소를 반환한다.       따라서 변수가 다르더라도 문자열의 값이 가튼 경우 메모리 주소를 참조하게 한다.           2. new 연산자 생성 방식     참조형의 기본 객체 생성 방식과 같다.     1 String str = new String(\"abcde\");           다른 참조형 변수와 같이 Heap 메모리 영역에 저장한다.  ","categories": ["java"],
        "tags": ["java"],
        "url": "/java/java-new-String/",
        "teaser": null
      },{
        "title": "Blog - minimal mistake 사이드바 카테고리에 포스트 갯수 추가하기",
        "excerpt":"minimal mistake 사이드바 카테고리에 포스트 갯수 추가하기  초보자가 jekyll과 minimal mistake를 사용하여 블로그를 설정하는 것은 쉽지 않고, 공식 문서를 읽는 것은 고통스럽다. 다행히도 다른 분들이 블로그를 통해서 많은 정보를 공유해주신 덕분에 지금의 간단한 블로그를 설정할 수 있었다. 하지만 단 하나, 사이드바 카테고리에 포스트의 갯수를 추가하는 것은 다른 블로그에서 본대로 설정이 잘 되지 않았다. 그래서 스스로 코드를 변경해보았고, 그것을 공유한다.   사이드바 카테고리에 포스트 갯수?  왼쪽의 사이드바를 본다면 java(1)과 같이 카테고리에 포스팅 갯수가 표시되어 있는 것을 볼 수 있다.   다 필요 없고 코드나 보여주셈  말이 길었다. 전체 코드는 아래와 같다. _include폴더에 nav_list파일에 원래 내용을 지우고, 복사 붙여넣기 하면 된다.   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 {% assign navigation = site.data.navigation[include.nav] %} &lt;nav class=\"nav__list\"&gt;   {% if page.sidebar.title %}&lt;h3 class=\"nav__title\" style=\"padding-left: 0;\"&gt;{{ page.sidebar.title }}&lt;/h3&gt;{% endif %}   &lt;input id=\"ac-toc\" name=\"accordion-toc\" type=\"checkbox\" /&gt;   &lt;label for=\"ac-toc\"&gt;{{ site.data.ui-text[site.locale].menu_label | default: \"Toggle Menu\" }}&lt;/label&gt;   &lt;ul class=\"nav__items\"&gt;     {% for nav in navigation %}       &lt;li&gt;         {% if nav.url %}           &lt;a href=\"{{ nav.url | relative_url }}\"&gt;&lt;span class=\"nav__sub-title\"&gt;{{ nav.title }}&lt;/span&gt;&lt;/a&gt;         {% else %}           &lt;span class=\"nav__sub-title\"&gt;{{ nav.title }}&lt;/span&gt;         {% endif %}          {% if nav.children != null %}         &lt;ul&gt;           {% for child in nav.children %}           {% assign category = site.categories.[child.title] | where_exp: \"item\", \"item.hidden != true\" %}             {%if category.size == null %}               &lt;li&gt;&lt;a href=\"{{ child.url | relative_url }}\"{% if child.url == page.url %} class=\"active\"{% endif %}&gt;{{ child.title }} (0)&lt;/a&gt;&lt;/li&gt;             {% else %}               &lt;li&gt;&lt;a href=\"{{ child.url | relative_url }}\"{% if child.url == page.url %} class=\"active\"{% endif %}&gt;{{ child.title }} ({{category.size}})&lt;/a&gt;&lt;/li&gt;             {% endif %}           {% endfor %}         &lt;/ul&gt;         {% endif %}       &lt;/li&gt;     {% endfor %}   &lt;/ul&gt; &lt;/nav&gt;   약간의 설명  원래 코드에서 바뀐 부분은 17번쨰 줄의 for문 안이다.   원본   1 2 3           {% for child in nav.children %}             &lt;li&gt;&lt;a href=\"{{ child.url | relative_url }}\"{% if child.url == page.url %} class=\"active\"{% endif %}&gt;{{ child.title }}&lt;/a&gt;&lt;/li&gt;           {% endfor %}   바뀐 부분   1 2 3 4 5 6 7 8           {% for child in nav.children %}             {% assign category = site.categories.[child.title] | where_exp: \"item\", \"item.hidden != true\" %}             {%if category.size == null %}               &lt;li&gt;&lt;a href=\"{{ child.url | relative_url }}\"{% if child.url == page.url %} class=\"active\"{% endif %}&gt;{{ child.title }} (0)&lt;/a&gt;&lt;/li&gt;             {% else %}               &lt;li&gt;&lt;a href=\"{{ child.url | relative_url }}\"{% if child.url == page.url %} class=\"active\"{% endif %}&gt;{{ child.title }} ({{category.size}})&lt;/a&gt;&lt;/li&gt;             {% endif %}           {% endfor %}   각각의 카테고리를 찾은 뒤, if, else문을 사용하여 포스트가 아직 올라오지 않은 카테고리에는 0이 추가되고, 글이 있는 카테고리에는 포스트의 갯수를 추가해주었다.   (여러 시도를 통하여 변수를 수정하다가 만든 코드라 문제가 있을 수 있습니다. 문제가 있다면 저도 알려주시기를 부탁드립니다.)  ","categories": ["Blog"],
        "tags": ["Blog","jekyll","minimal mistake","sidebar navigation","sidebar navigation 포스팅 수"],
        "url": "/blog/blog-nav-list-post-number/",
        "teaser": null
      },{
        "title": "Java Lang Package",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/java-lang-package/",
        "teaser": null
      }]
