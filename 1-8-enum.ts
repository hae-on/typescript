{
  // Enum
  // JavaScript x
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //   TypeScript
  enum Days {
    Monday, //=1로 하면 1부터 시작 , 문자열 할당 가능(but 하나하나 다 해줘야 함)
    Tueday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Thursday);
  const day = Days.Saturday;
  console.log(day);

  //  day = 10 할당해도 오류 뜨지 않음 ->enum 사용 지양

  // union으로 대체
  type DayOfWeek = " Monday" | "Tueday" | "Wednesday";
  let dayOfWeek: DayOfWeek = " Monday";
  //   dayOfToday = "ellie" 할당 불가능
}
