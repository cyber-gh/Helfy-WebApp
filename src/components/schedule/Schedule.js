import React from "react";
import { render } from "react-dom";
import ScheduleHeader from "./ScheduleHeader";
import ScheduleBody from "./ScheduleBody";
import { convertDay, generateOutOfSchedule, convertNumToHour, convertHourToNum } from "./utils";

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "13.07",
      endDate: "14.07",
      appointments: [],
      cells: [],
      minWeekStartHour: "",
      maxWeekEndHour: "",
      workingHours: []
    };
  }
  componentDidMount() {
    // First request server for appointments and working intervals, need
    // ******************** Created for test **************************
    let app1 = {
      startHour: "09:00",
      endHour: "10:30",
      weekDay: "Monday",
      contactInfo: {
        name: "Francu Richard",
        phoneNumber: "0754977123",
      },
    };

    var workingIntervals = [
      { day: "Monday", intervals: [{ startHour: "09:00", endHour: "11:00" }, {startHour:"16:00", endHour:"18:00"}] },
      { day: "Tuesday", intervals: [{ startHour: "09:30", endHour: "16:00" }] },
      {
        day: "Wednesday",
        intervals: [{ startHour: "09:30", endHour: "18:00" }],
      },
      { day: "Thursday", intervals: [{ startHour: "09:30", endHour: "18:00" }] },
      { day: "Friday", intervals: [{ startHour: "09:30", endHour: "18:00" }] },
      {
        day: "Saturday",
        intervals: [],
      },
      { day: "Sunday", intervals: [] },
    ];

    this.setState({
      appointments: [app1],
    });
    // *****************************************************************
    var appointments = [app1];
    var i, j;
    var cells = [];

    // first extract minim start hour and maximum endhour from all working intervals
    var minStartHour = 47;
    var maxEndHour = 0;
    var it1;
    for (it1 of workingIntervals) {
      var it2;
      for (it2 of it1.intervals) {
        if (convertHourToNum(it2.startHour) < minStartHour) {
          minStartHour = convertHourToNum(it2.startHour);
        }
        if (convertHourToNum(it2.endHour) > maxEndHour) {
          maxEndHour = convertHourToNum(it2.endHour);
        }
      }
    }
    minStartHour = minStartHour - 1;
    // generate week working hours based on min and max
    var workingHours = [];
    for (i = minStartHour; i <= maxEndHour; i++) {
      workingHours.push(convertNumToHour(i))
    }

    // Generate cells to fill out schedule
    for (i = 1; i <= 7; i++) {
      for (j = minStartHour; j <= maxEndHour; j++) {
        let cell = {
          row: j,
          span: 1,
          column: i,
          isAppointment: false,
          outOfSchedule: false,
          prefKey: "cell",
        };
        cells.push(cell);
      }
    }
    // Generate cells representing the appointments
    var appointment;
    for (appointment of appointments) {
      // console.log(appointment);
      let cell = {
        row: convertHourToNum(appointment.startHour),
        span:
          convertHourToNum(appointment.endHour) -
          convertHourToNum(appointment.startHour),
        column: convertDay(appointment.weekDay),
        isAppointment: true,
        outOfSchedule: false,
        prefKey: "app",
        contactInfo: appointment.contactInfo,
      };

      cells.push(cell);
    }

    //  **Generate cells representing out of schedule hours
    var it1;
    for (it1 of workingIntervals) {
      it1.intervals.push({ startHour: convertNumToHour(maxEndHour), endHour: convertNumToHour(maxEndHour)});
      var res = generateOutOfSchedule(
        it1.intervals,
        minStartHour,
        maxEndHour,
        it1.day
      );
      var it2;
      for (it2 of res) {
        cells.push(it2);
      }
    }
    this.setState({
      cells: cells,
      minWeekStartHour: minStartHour,
      maxWeekEndHour: maxEndHour,
      workingHours: workingHours
    });
  }

  render() {
    return (
      <div>
        <ScheduleHeader
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <ScheduleBody
          minWeekStartHour={this.state.minWeekStartHour}
          maxWeekEndHour={this.state.maxWeekEndHour}
          rowsCnt={this.state.maxWeekEndHour - this.state.minWeekStartHour + 1} 
          workingHours={this.state.workingHours}
          cells={this.state.cells}
        />
      </div>
    );
  }
}

// render(<Schedule />, document.getElementById("schedule-root"));
export default Schedule;
