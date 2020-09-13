import React from "react";
import Cell from "./Cell";

import styles from "../../css/ScheduleBody.module.css"

const ScheduleBody = (props) => {
  const cellHeight = 60;

  return (
    <div className= {styles.schedule_body} style={{height: `${cellHeight * props.rowsCnt}px`, gridTemplateRows: `repeat(${props.rowsCnt}, 1fr)`,}}>
      <div className={styles.hours_column} style={{gridRow: `1 / span ${props.rowsCnt}`, gridTemplateRows: `repeat(${props.rowsCnt}, 1fr)`,}}>
        {props.workingHours.map((hour, cnt) => {
          return (
            <div className={styles.hour_cell} key={`workingHour${cnt}`}>
              {hour}
            </div>
          );
        })}
      </div>
      <div className={styles.week_container} style={{gridRow: `1 / span ${props.rowsCnt}`, gridTemplateRows: `repeat(${props.rowsCnt}, 1fr)`,}}>
        {props.cells.map((cell, cnt) => {
          return (
            <Cell
              key={cell.prefKey + cnt}
              row={cell.row - props.minWeekStartHour + 1}
              span={cell.span}
              column={cell.column}
              isAppointment={cell.isAppointment}
              outOfSchedule={cell.outOfSchedule}
              contactInfo={cell.contactInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleBody;
