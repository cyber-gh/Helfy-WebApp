import React from "react";
import Cell from "./Cell";

const ScheduleBody = (props) => {
  const cellHeight = 60;

  const mainStyle = {
    width: "100%",
    height: `${cellHeight * props.rowsCnt}px`,
    background: "#ffffff",
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: `repeat(${props.rowsCnt}, 1fr)`,
  };

  const hoursColumnStyle = {
    gridColumn: "1 / span 1",
    gridRow: `1 / span ${props.rowsCnt}`,
    background: "#f3f3f3",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridTemplateRows: `repeat(${props.rowsCnt}, 1fr)`,
    // margin: "auto"
  };

  const cellContainerStyle = {
    gridColumn: "2 / span 7",
    gridRow: `1 / span ${props.rowsCnt}`,
    width: "100%",
    display: "grid",
    background: "#FFFFFF",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridTemplateRows: `repeat(${props.rowsCnt}, 1fr)`,
  };

  const cellStyle = {
    border: "#ccc 1px solid",
    textAlign: "center",
  };

  const hourCellStyle = {
    border: "#ccc 1px solid",
    textAlign: "center",
    background: "#6a1b9a",
    color: "#ffffff"
  }

  return (
    <div className="schedule-body" style={mainStyle}>
      <div className="hours-column" style={hoursColumnStyle}>
        {props.workingHours.map((hour, cnt) => {
          return (
            <div style={hourCellStyle} key={`workinkHour${cnt}`}>
              {hour}
            </div>
          );
        })}
      </div>
      <div className="cells-container" style={cellContainerStyle}>
        {props.cells.map((cell, cnt) => {
          console.log(props.Hour);
          console.log(cell.row);
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
