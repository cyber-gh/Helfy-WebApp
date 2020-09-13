import React from "react";
import ScheduleBody from "./ScheduleBody";
import { convertDay, generateOutOfSchedule, convertNumToHour, convertHourToNum } from "./utils";
import ScheduleHeader from "./ScheduleHeader";

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monthDay: "13",
      month: "August",
      year: "2020",
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

    let workingIntervals = [
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
    let appointments = [app1];
    let i, j;
    let cells = [];

    // first extract minim start hour and maximum endhour from all working intervals
    let minStartHour = 47;
    let maxEndHour = 0;
    let it1;
    for (it1 of workingIntervals) {
      let it2;
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
    let workingHours = [];
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
    let appointment;
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
    for (it1 of workingIntervals) {
      it1.intervals.push({ startHour: convertNumToHour(maxEndHour), endHour: convertNumToHour(maxEndHour)});
      let res = generateOutOfSchedule(
        it1.intervals,
        minStartHour,
        maxEndHour,
        it1.day
      );
      let it2;
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
        <ScheduleHeader />
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

export default Schedule;
