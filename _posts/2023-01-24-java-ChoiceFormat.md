---
title: "JAVA - ChoiceFormat"
categories: 
  - java
tags:
  - java
  - formatting class
  - ChoiceFormat
sitemap:
  changefreq: daily
  priority : 1.0
---

## ChoiceFormat

`` ⚠ 이 글은 '자바의 정석'과 다른 인터넷의 글들을 참고하여 작성되었습니다 ⚠``

* ChoiceFormat은 특정 범위에 속하는 값을 문자열로 변환해준다.
* 연속적 또는 불연속적인 범위의 값들을 처리하는 데 있어서 if문이나 switch문은 적절하지 못한 경우가 많은데, ChoiceFormat을 사용하면 값을 간단하고 직관적으로 문자열로 변환할 수 있다.

### 두 개의 배열 사용
예시1
```java
import java.text.ChoiceFormat;

public class ChoiceFormatEx1 {
    public static void main(String[] args){
        double[] limits = {60, 70, 80, 90};//낮은 값부터 큰 값의 순서로 적어야한다.
        //limits, grade간의 순서를 맞추어야 한다.
        String[] grades = {"D", "C", "B", "A"};

        int[] scores = {100, 95, 88, 70, 52, 60, 70};

        ChoiceFormat form = new ChoiceFormat(limits, grades);

        for(int i = 0;i < scores.length;i++){
            System.out.println(scores[i]+":"+form.format(scores[i]));
        }
    }
}
```
결과1
```
100:A
95:A
88:B
70:C
52:D
60:D
70:C
```
* double 배열 limits는 범위의 경계값을 저장하는데 사용되었고, String 배열 grades는 범위에 포함될 값을 치환할 문자열을 저장하는데 사용되었다.
* 경계값은 double형으로 반드시 모두 오름차순으로 정렬되어있어야 한다.
* 치환될 문자열의 개수는 경계값에 의해 정의된 범위의 개수와 일치해야 한다.
* 위의 두 조건을 만족하지 않으면 IllegalArgumentException이 발생한다.

### 패턴 사용
예시2
```java
import java.text.ChoiceFormat;

public class ChoiceFormatEx2 {
    public static void main(String[] args){
        String pattern = "60#D|70#C|80#B|90#A";
        int[] scores = {91, 90, 80, 88, 70, 52, 60};

        ChoiceFormat form = new ChoiceFormat(pattern);
        for(int i = 0;i<scores.length;i++){
            System.out.println(scores[i] + ":" + form.format(scores[i]));
        }
    }
}
```
결과2
```
91:A
90:A
80:B
88:B
70:C
52:D
60:D
```
* 예시1에서 두 배열(limits, grades)을 사용하여 문자열을 처리한 것과 달리 예시2에서는 패턴을 사용하였다.
* 패턴은 구분자로 '#'와 '<' 두가지를 제공한다. '#'는 경계값을 범위에 포함시키고, '<'는 포함시키지 않는다.
* `limit#value`의 형태로 사용한다. ex)```60<D|70<C|80<B|90<A```