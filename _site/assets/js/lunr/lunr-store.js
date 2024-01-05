var store = [{
        "title": "JAVA - String 타입의 두가지 생성 방식",
        "excerpt":"String 타입의 두가지 생성 방식  자바에서 String은 기본형처럼 사용하는 리터럴 방식과 참조형, 즉 객체와 같이 생성하는 new 연산자 생성 방식이 있다.   1. 리터럴 방식     new 연산자 없이 생성이 가능     String str = \"abcde\";           String constant pool 메모리 영역에 저장            String constant pool 메모리 영역은 heap 메모리영역 내의 별도 영역에 위치           대부분의 String 객체는 리터럴 방식으로 생성   리터럴 방식의 메모리 관리            상수풀에 문자열의 값이 없을 경우, 값을 저장 후 메모리 주소를 반환한다.       상수풀에 해당 문자열의 값이 있을 경우 해당 문자열의 메모리 주소를 반환한다.       따라서 변수가 다르더라도 문자열의 값이 가튼 경우 메모리 주소를 참조하게 한다.         2. new 연산자 생성 방식                   참조형의 기본 객체 생성 방식과 같다.     String str = new String(\"abcde\");           다른 참조형 변수와 같이 Heap 메모리 영역에 저장한다.  ","categories": ["java"],
        "tags": ["java"],
        "url": "/java/java-new-String/",
        "teaser": null
      }]
