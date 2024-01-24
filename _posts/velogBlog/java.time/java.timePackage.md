## java.time 패키지

java.time 패키지는 Date와 Calendar가 가지고 있는 단점을 해소해주는 패키지로, JDK1.8부터 추가되었다.

java.time과 그 서브패키지에 속한 클래스들은 String클래스와 같이 '불변(immutable)'이라는 것이다.<br>
java.time에서 날짜나 시간을 변경하는 메서드들은 기존의 객체를 변경하는 대신 항상 변경된 새로운 객체를 반환한다.<br>
기존의 Calendar클래스는 '불변(immutable)'하지 않으므로 멀티쓰레드 환경에서 안전하지 못했다.

패키지|설명
-|-
java.time|날짜와 시간을 다루는데 필요한 핵심 클래스들을 제공
java.time.chrono|표준(ISO)이 아닌 달력 시스템을 위한 클래스들을 제공
java.time.format|날짜와 시간을 파싱하고, 형식화하기 위한 클래스들을 제공
java.time.temporal|날짜와 시간의 필드(field)와 단위(temporal)를 위한 클래스들을 제공
java.time.zone|시간대(time-zone)와 관련된 클래스들을 제공

### java.time의 핵심 클래스
java.time패키지에서는 Calendar클래스와 달리, 날짜와 시간이 별도의 클래스로 분리되어있다.
* 날짜: LocalDate
* 시간: LocalTime
* 날짜 + 시간: LocalDateTime
* LocalDateTime + 시간대: ZoneDateTime

java.time패키지에서는 날짜와 시간의 간격을 표현하기 위하여 각각 Period와 Duration 클래스를 사용한다.
* 날짜 - 날짜 → Period
* 시간 - 시간 → Duration

java.time패키지에 속한 클래스의 객체를 생성하는 가장 기본적인 방법은 now()와 of()이다.
* 현재 날짜와 시간을 저장하는 객체를 생성 → now()
```java
LocalDate date = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.now();
ZonedDateTime dateTimeInKr = ZonedDateTime.now();
```
* 원하는 날짜와 시간을 저장하는 객체를 생성 → of()<br>
  → 해당 필드의 값을 순서대로 지정. 각 클래스마다 다양한 종류의 of()가 정의되어 있다.
```java
LocalDate date = LocalDate.of(2015, 11, 23);
LocalTime time = LocalTime.of(23, 59, 59);

LocalDateTime dateTime = LocalDateTime.of(date, time);
ZonedDateTime zDateTime = ZonedDateTime.of(dateTime, zoneId.of("Asia/Seoul"));
```
#### 적용된 인터페이스?
* java.time에서 날짜와 시간을 표현하기 위한 클래스(LocalTime, LocalDate, LocalDateTime, ZonedDateTime ...)들은 모두 Temporal, Temporal Accessor, TemporalAdjuster 인터페이스를 구현했다.
* Duration과 Period는 TemporalAmount 인터페이스를 구현하였다.<br>
→ 대부분 부분 날짜와 시간을 위한 것이므로, TemporalAmount인지 아닌지만 확인하면 된다.
* TemporalUnit 인터페이스는 날짜와 시간의 단위를 정의해 놓은 것이고, 이 인터페이스를 구현한 것이 열거형 ChronoUnit이다.
* TemporalField는 년, 월, 일 등 날짜와 시간의 필드를 정의해 놓은 것으로, 열거형 ChronoField가 이 인터페이스를 구현하였다.
```java
LocalTime now = LocalTime.now(); //현재 시간
int minute = now.getMinute(); //현재 시간에서 분(minute)만 뽑아낸다.
// int minute = now.get(ChronoField.MINUTE_OF_HOUR); //위의 문장과 동일
```
날짜와 시간에서 특정 필드의 값만을 얻을 때는 get()이나, get으로 시작하는 메서드를 이용한다. 그리고 아래와 같이 특정 날짜와 시간에서 지정된 단위의 값을 더하거나 뺄 때는 plus() 또는 minus()에 값과 함께 열거형 ChronoUnit을 사용한다.
```java
LocalDate today = LocalDate.now();
LocalDate tomorrow = today.plus(1, ChronoUnit.DAYS); //오늘에 1일을 더함
LocalDate tomorrow = today.plusDays(1);
```