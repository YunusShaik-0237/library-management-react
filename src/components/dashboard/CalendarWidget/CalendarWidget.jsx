import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import styles from "./CalendarWidget.module.css";

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date()
  );

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const totalDays = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const today = new Date();

  const prevMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
  };

  const calendar = [];

  for (let i = 0; i < firstDay; i++) {
    calendar.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    calendar.push(i);
  }

  return (
    <div className={styles.calendarCard}>
      <div className={styles.header}>
        <button onClick={prevMonth}>
          <FaChevronLeft />
        </button>

        <h3>
          {months[month]} {year}
        </h3>

        <button onClick={nextMonth}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.weekdays}>
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className={styles.grid}>
        {calendar.map((day, index) => {
          const isToday =
            day &&
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={index}
              className={`${styles.day} ${
                isToday ? styles.today : ""
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWidget;