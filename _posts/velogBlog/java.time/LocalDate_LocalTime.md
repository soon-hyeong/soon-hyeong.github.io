## java.time 패키지(2)

### 객체 생성하기
LocalDate와 LocalTime 객체를 생성하기 위해서는 now()와 of()를 사용한다. 두 메소드 모두 static 메소드이다.
```java
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();

LocalDate birthDate = LocalDate.of(1999, 12, 31);
LocalTime birthTime = LocalTIme.of(23, 59, 59);
```

### 필드 값 가져오기
LocalDate와 LocalTime의 객체에서 특정 필드의 값을 가져올 때는 get()과 get이 이름에 포함된 메서드를 사용한다.
<table>
    <th>클래스<th>메서드<th>설명
    <tr><td rowspan="9">LocalDate<td>int    getYear()<td>년도(1999)
    <tr><td>int   getMonthValue()<td>월(12)
    <tr><td>Month getMonth()<td>월(DECEMBER) getMonth().getValue() = 12
    <tr><td>int getDayOfMonth()<td>일(31)
    <tr><td>int getDayOfYear()<td>같은 해의 1월 1일부터 몇번쨰 일(365)
    <tr><td>DayOfWeek getDayOfWeek()><td>요일(FRIDAY) getDayOfWeek().getValue()=5
    <tr><td>intlengthOfMonth()<td>같은 달의 총 일수(31)
    <tr><td>int lengthOfYear()<td>같은 해의 총 일수(365), 윤년이면 366
    <tr><td>boolean   isLeapYear()<td>윤년여부 확인
    <tr><td rowspan="4">LocalTime<td>int  getHour()<td>시(23)
    <tr><td>int getMinute<td>분(59)
    <tr><td>int getSecond()<td>초(59)
    <tr><td>int getNano()<td>나노초(0)
</table>
이 외에 get()과 getLong()이 있는데, 원하는 필드를 직접 지정할 수 있다. 대부분의 필드는 int타입의 범위에 속하지만, 몇몇 필드는 int타입의 범위를 넘을 수 있으므로 getLong()을 사용해야 한다.<br>이 메서드들은 ChronoField에 정의 된 상수들 중 각 클래스에서 사용할 수 있는 것들만 매개변수로 사용한다.

```java
int get(TemporalField field)
long get(TemporalField field)
```

### 필드 값 변경하기
필드의 값을 변경하려면, with(), plus(), minus()를 사용한다.
#### with()
날짜와 시간에서 특정 필드 값을 변경하려면, 다음와 같이 with로 시작하는 메서드를 사용하면 된다.
```java
LocalDate withYear(int year)
LocalDate withMonth(int month)
LocalDate withDayOfMonth(int dayOfMonth)
LocalDate withDayOfYear(int dayOfYear)

LocalTime withHour(int hour)
LocalTime withMinute(int minute)
LocalTime withSecond(int second)
LocalTime withNano(int nanoOfSecond)
```
with()를 사용하면, 원하는 필드를 직접 지정할 수 있다. 위의 메서드들은 모두 with()로 작성되었다.
```java
LocalDate with(TemporalField field, long newValue)

//예시
date = date.withYear(2000); //년도를 2000년을 변경
time = time.withHour(12); //시간을 12시로 변경
```
#### plus(), minus()
특정 필드에 값을 더하거나 뺼때는 plus()와 minus()를 사용한다. 아래에는 plus()만 표시하였고, minus()를 사용하기 위해서는 plus를 minus로 바꾸어주면 된다.
```java
LocalTime plus(TemporalAmount AmountToAdd)
LocalTime plus(long amountToAdd, TemporalUnit unit)

LocalDate plus(TemporalAmount amountToAdd)
LocalDate plus(long amountToAdd, TemporalUnit unit)

//plus를 사용하여 만들어진 메서드들
LocalDate plusYears(long yearsToAdd)
LocalDate plusMonths(long monthsToAdd)
LocalDate plusDays(long daysToAdd)
LocalDate plusWeeks(long weeksToAdd)

LocalTime plusHours(long hoursToAdd)
LocalTime plusMinutes(long minutesToAdd)
LocalTime plusSeconds(long secondsToAdd)
LocalTime plusNanos(long nanosToAdd)
```
+LocalTime의 truncatedTo()는 지정된 것보다 작은 단위의 필드를 0으로 만든다
```java
LocalTime time = LocalTime.of(12,34,56);    //12:34:56
time = time.truncatedTo(ChronoUnit.Hours);  //Hours보다 작은 단위를 0으로 설정
System.out.println(time); //12:00
```