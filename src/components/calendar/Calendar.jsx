import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import { Container, RenderCalendar } from "./Calendar.styles";
import "react-calendar/dist/Calendar.css";
import { add } from "date-fns";

const Calendar = () => {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    // if date is not exist
    if (!date.justDate) {
      return;
    }
    // destructure initial date value object
    const { justDate } = date;
    //config time restaurant open and close and the time we book beforehand
    const beginning = add(justDate, { hours: 10 });
    const end = add(justDate, { hours: 20 });
    //   and the time we book beforehand in minutes(a day)
    const interval = 1440;

    // make empty array for times
    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      // push i element in times array
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <Container>
      {date.justDate ? (
        <RenderCalendar></RenderCalendar>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR"
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </Container>
  );
};

export default Calendar;
