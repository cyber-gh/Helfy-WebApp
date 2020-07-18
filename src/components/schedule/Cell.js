import React from "react";

const Cell = (props) => {
  // console.log(props.empty)
  const appointmentBackground = "#e53935";
  const background = "#ffffff";
  const gridRow = `${props.row} / span ${props.span}`;
  const gridColumn = `${props.column} / span 1`;
  const border = "#ccc 1px solid";

  const scheduleCellStyle = {
    background: background,
    gridColumn: gridColumn,
    gridRow: gridRow,
    border: border,
  };
  const outOfScheduleStyle = {
    background: "#e0e0e0",
    gridColumn: gridColumn,
    gridRow: gridRow,
    color: "#e0e0e0",
    // margin: ".25rem .25rem",
    justifyContent: "center",
    border: border,
    // borderRadius: "0.25em",
  };
  const appointmentStyle = {
    background: appointmentBackground,
    gridColumn: gridColumn,
    gridRow: gridRow,
    color: "#ffffff",
    margin: ".25rem .25rem",
    justifyContent: "center",
    border: border,
    borderRadius: "0.25em",
  };

  var style;
  if (props.isAppointment == true) {
    style = appointmentStyle;
  } else if (props.outOfSchedule == true) {
    style = outOfScheduleStyle;
  } else {
    style = scheduleCellStyle;
  }

  return (
    <div style={props.isAppointment == true ? appointmentStyle : style}>
      {props.isAppointment == true ? props.contactInfo.name : ""} <br />
      {props.isAppointment == true ? props.contactInfo.phoneNumber : ""}
    </div>
  );
};

export default Cell;
