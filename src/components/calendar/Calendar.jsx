import React from "react";
import ReactCalendar from "react-calendar";
import { Container } from "./Calendar.styles";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  return (
    <Container>
      <ReactCalendar
        minDate={new Date()}
        className="REACT-CALENDAR"
        view="month"
        onClickDay={(date) => console.log(date)}
      />
    </Container>
  );
};

export default Calendar;
