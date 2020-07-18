export const convertHourToNum = (hour) => {
  var t1 = hour.substring(0, 2);
  var t2 = hour.substring(3, 5);
  var res = t1 * 2 + Math.floor(t2 / 30);
  return res;
}

export const convertNumToHour = (num) => {
  var t = num / 2;
  t = Math.floor(t);
  var res = ""
  if (t < 10) {
    res = `0${t}:`;
    if (num % 2 == 0) {
      res = res + "00"
    } else {
      res = res + "30"
    }
  } else {
    res = `${t}:`;
    if (num % 2 == 0) {
      res = res + "00"
    } else {
      res = res + "30"
    }
  }
  return res;
}

export const convertDay = (day) => {
  var d = 0;
  switch (day) {
    case "Monday":
      d = 1;
      break;
    case "Tuesday":
      d = 2;
      break;
    case "Wednesday":
      d = 3;
      break;
    case "Thursday":
      d = 4;
      break;
    case "Friday":
      d = 5;
      break;
    case "Saturday":
      d = 6;
      break;
    case "Sunday":
      d = 7;
      break;
    default:
      break;
  }
  return d;
};

export const generateOutOfSchedule = (
  workingIntervals,
  minHour,
  maxHour,
  weekDay
) => {
  // asume that the working intervals are sorted by (weekDay, hour)
  var curr = minHour;
  var result = [];
  var interval;
  for (interval of workingIntervals) {
    var cnt;
    for (cnt = curr; cnt < convertHourToNum(interval.startHour); cnt++) {
      let cell = {
        row: cnt,
        span: 1,
        column: convertDay(weekDay),
        isAppointment: false,
        outOfSchedule: true,
        prefKey: "out",
      };
      // console.log(result)
      result.push(cell);
    }
    curr = convertHourToNum(interval.endHour);
  }
  var cnt;
  for (cnt = curr; cnt <= maxHour; cnt ++) {
    let cell = {
      row: cnt,
      span: 1,
      column: convertDay(weekDay),
      isAppointment: false,
      outOfSchedule: true,
      prefKey: "out",
    };
    // console.log(result)
    result.push(cell);
  }

  return result;
};
