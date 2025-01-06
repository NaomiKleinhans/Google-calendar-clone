import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

// Extend dayjs with the weekOfYear plugin
dayjs.extend(weekOfYear);

// Check if a given day is the current day
export const isCurrentDay = (day: dayjs.Dayjs) => {
  return day.isSame(dayjs(), "day");
};

// Generate a 2D array representing the days of a given month
export const getMonth = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs().set("month", month).startOf("month").day();

  let dayCounter = -firstDayOfMonth;

  return Array.from({ length: 5 }, () =>
    Array.from({ length: 7 }, () =>
      dayjs().set("year", year).set("month", month).date(++dayCounter),
    ),
  );
};

// Generate an array of the days in a week for a given date
export const getWeekDays = (date: dayjs.Dayjs) => {
  const startOfWeek = date.startOf("week");

  const weekDates = [];

  // Loop through the 7 days of the week
  for (let i = 0; i < 7; i++) {
    const currentDate = startOfWeek.add(i, "day");
    weekDates.push({
      currentDate,
      today: currentDate.isSame(dayjs(), "day"),
      isCurrentDay: isCurrentDay(currentDate),
    });
  }

  return weekDates;
};

// Generate an array of the hours in a day
export const getHours = Array.from({ length: 24 }, (_, i) =>
  dayjs().startOf("day").add(i, "hour"),
);

// Generate the weeks of a month dynamically
export const getWeeks = (monthIndex: number) => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs()
    .set("year", year)
    .set("month", monthIndex)
    .startOf("month");
  const lastDayOfMonth = dayjs()
    .set("year", year)
    .set("month", monthIndex)
    .endOf("month");

  const weeks: number[] = [];

  // Loop from the first day to the last day of the month
  let currentDay = firstDayOfMonth;
  while (
    currentDay.isBefore(lastDayOfMonth) ||
    currentDay.isSame(lastDayOfMonth)
  ) {
    const weekNumber = currentDay.week(); // This requires the weekOfYear plugin to work as imported above
    if (!weeks.includes(weekNumber)) {
      weeks.push(weekNumber);
    }
    currentDay = currentDay.add(1, "day"); // Move to the next day
  }

  return weeks;
};
