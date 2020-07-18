import React from "react";

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
  const mainStyle = {
    width: "100%",
    background: "#e0e0e0",
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    paddingTop: "2rem",
    textAlign: "center",
    justifyContent: "center",
    position: "webkit-sticky" /* Safari */,
    position: "sticky",
    top: "0",
  };
  const titleStyle = {
    margin: "auto",
    gridColumn: "1 / span 8",
    gridRow: "1 / span 1",
    textAlign: "center",
  };
  const daysRowStyle = {
    display: "grid",
    gridColumn: "1 / span 8",
    gridTemplateColumns: "repeat(8, 1fr)",
  };

  return (
    <div style={mainStyle}>
      <div style={titleStyle}>
        Week: {props.startDate} - {props.endDate}
      </div>
      <div style={daysRowStyle}>
        {weekDays.map((day, cnt) => {
          return (
            <div
              key={`weekday${cnt}`}
              style={{
                height: "2rem",
                color: "#ffffff",
                border: "#ccc 1px solid",
                textAlign: "center",
                background: "#6a1b9a",
                marginTop: "auto",
                marginBottom: "auto",
              }}
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
