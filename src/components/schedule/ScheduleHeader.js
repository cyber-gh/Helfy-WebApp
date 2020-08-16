import React from "react";

import styles from "./ScheduleHeader.module.css";

const ScheduleHeader = (props) => {
  const weekDays = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className={styles.schedule_header}>
      <div className={styles.title}>
        Week: {props.startDate} - {props.endDate}
      </div>
      <div className={styles.days_row}>
        {weekDays.map((day, cnt) => {
          return (
            <div
              className={styles.week_day}
              key={`weekday${cnt}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleHeader;
