import React from "react";

import styles from "./Cell.module.css"

const Cell = (props) => {
  let row_column = {
    gridRow: `${props.row} / span ${props.span}`,
    gridColumn: `${props.column} / span 1`,
  }

  let className;
  if (props.isAppointment) {
    className = styles.appointment_cell;
  } else if (props.outOfSchedule) {
    className = styles.out_of_schedule_cell;
  } else {
    className = styles.schedule_cell;
  }

  return (
    <div className={className} style={row_column}>
      {props.isAppointment ? props.contactInfo.name : ""} <br />
      {props.isAppointment ? props.contactInfo.phoneNumber : ""}
    </div>
  );
};

export default Cell;
