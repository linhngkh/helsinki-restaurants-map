import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import { Container, DivCalendar } from "./Calendar.styles";
import {
  STORE_OPENNING_TIME,
  STORE_CLOSING_TIME,
  INTERVAL,
} from "../../constants/config";
import "react-calendar/dist/Calendar.css";
import { add, format } from "date-fns";

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
    const beginning = add(justDate, { hours: STORE_OPENNING_TIME });
    const end = add(justDate, { hours: STORE_CLOSING_TIME });
    // the time we book beforehand in minutes(a day)
    const interval = INTERVAL;

    // make empty array for times
    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      // push i element in date array
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <Container>
      {date.justDate ? (
        <DivCalendar>
          {times?.map((time, index) => (
            <div key={`time - ${index}`}>
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </DivCalendar>
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
