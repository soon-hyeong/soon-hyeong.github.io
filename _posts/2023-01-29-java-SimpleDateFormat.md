---
title: "JAVA - SimpleDateFormat"
categories: 
  - java
tags:
  - java
  - formatting class
  - SimpleDateFormat
sitemap:
  changefreq: daily
  priority : 1.0
---
## SimpleDateFormat
* Date와 Calendar만으로 날짜 데이터를 원하는 형태로 다양하게 출력하는 것은 불편하다.
* SimpleDateFormat을 사용하면 날짜 데이터를 원하는 형태로 다양하게 출력할 수 있다.

### SimpleDateFormat의 패턴에 사용되는 기호
`` ⚠ 이 글은 '자바의 정석'과 다른 인터넷의 글들을 참고하여 작성되었습니다 ⚠``

기호|의미|보기
-|-|-
G|연대(BC, AD)|AD
y|연도|2006
M|월(1~12 또는 1월~12월)|10 또는 10월, OCT
w|년의 몇 번째 주(1~53)|50
W|월의 몇 번째 주(1~53)|5월
D|년의 몇 번째 일(1~366)|100
d|월의 몇 번쨰 일(1~31)|15
F|월의 몇 번쨰 요일(1~5)|1
E|요일|월
a|오전/오후(AM, PM)|PM
H|시간(0~23)|20
k|시간(1~24)|13
K|시간(0~11)|10
h|시간(1~12)|11
m|분(0~59)|35
s|초(0~59)|55
S|천분의 일초(0~999)|253
z|Time zone(RFC 822 time zone)|+0900
'|escape문자(특수문자를 표현하는데 사용)|없음

### SimpleDateFormat의 사용 방법
* SimpleDateFormat을 사용하려면 원하는 패턴을 작성하여 SimpleDateFormat인스턴스를 생성한 뒤, 출력하고자 하는 Date인스턴스를 가지고 format(Date d)메소드를 호출하면 지정한 출력형식에 맞게 변환된 문자열을 얻게 된다.
 
예시
```java
Date today = new Date();
SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");

// 오늘 날짜를 yyyy-MM-dd 형태로 변환하여 반환한다.
String result = df.format(today);
System.out.println(result);
```
결과
```
2024-01-20
```