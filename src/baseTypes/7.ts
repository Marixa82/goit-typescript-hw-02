/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayToday {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}
function isWeekend(day: DayToday) {
  switch (day) {
    case DayToday.SATURDAY:
    case DayToday.SUNDAY:
      return true;
    default:
      return false;
  }
}

export {}
// const today = DayToday.SATURDAY;
// console.log(isWeekend(today)); 