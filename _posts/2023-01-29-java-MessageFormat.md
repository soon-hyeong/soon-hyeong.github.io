---
title: "JAVA - MessageFormat"
categories: 
  - java
tags:
  - java
  - formatting class
  - MessageFormat
sitemap:
  changefreq: daily
  priority : 1.0
---
## MessageFormat
* MessageFormat은 데이터를 정해진 양식에 맞게 출력할 수 있게 해준다.
* SimpleDateFormat의 parse처럼 MessageFormat의 parse를 이용하면 지정된 양식에서 필요한 데이터만을 추출할 수 있다.

### 데이터를 출력
예시1
```java
import java.text.MessageFormat;

public class MessageFormatEx1 {
    public static void main(String[] args){
        String msg = "Name: {0} \nTel: {1} \nAge:{2} \nBirthday:{3}";

        Object[] arguments = {
                "이자바", "02-123-1234", "27", "07-09"
        };

        String result = MessageFormat.format(msg, arguments);
        System.out.println(result);
    }
}
```
* MessageFormat에 사용할 양식인 문자열 msg를 작성할 때 '{숫자}'로 표시된 부분이 데이터가 출력될 자리이다.
* 이 자리는 순차적일  필요는 없고, 여러 번 반복해서 사용할 수도 있다.
* 사용되는 숫자는 배열처럼 인덱스가 0부터 시작하며, 양식에 들어갈 데이터는 객체배열인 arguments에 지정되어 있다.
* arguments는 객체배열이므로 String 이외에도 다른 객체들이 지정될 수 있으며, 이 경우 세부적인 옵션들이 사용될 수 있다.

### 데이터를 추출
예시2
```java
import java.text.MessageFormat;

public class MessageFormatEx3 {
    public static void main(String[] args) throws Exception{
        String[] data = {
                "INSERT INTO CUST_INFO VALUES ('이자바', '02-123-1234', 27, '07-09');",
                "INSERT INTO CUST_INFO VALUES ('김프로', '032-333-1234', 33, '10-07');",
        };

        String pattern = "INSERT INTO CUST_INFO VALUES (''{0}'', ''{1}'', {2}, ''{3}'');";
        MessageFormat mf = new MessageFormat(pattern);

        for(int i = 0; i < data.length;i++){
            Object[] objs = mf.parse(data[i]);
            for(int j = 0; j < objs.length; j++)
                System.out.print (objs[j] + ",");
            System.out.println();
        }
    }
}
```
* parse(String source)를 이용하여 출력된 데이터로부터 필요한 데이터만을 추출하였다.
* 홀따옴표(')는 MessageFormat 양식의 escape문자로 사용되기 때문에 문자열 pattern에 홀따옴표를 사용하려면 홀따옴표를 연속으로 두번 사용해야 한다.

` ⚠ 이 글은 '자바의 정석'과 다른 인터넷의 글들을 참고하여 작성되었습니다 ⚠`