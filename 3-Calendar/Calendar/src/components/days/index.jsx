import React from "react";
import "../../css/style.css";

//In this component the array of the days of the week of the parent component is brought.
function Days (props) {
    const {
            dayOfWeek
          } = props
    return (
      <div className="Days">
        <div>{dayOfWeek[0]}</div>
        <div>{dayOfWeek[1]}</div>
        <div>{dayOfWeek[2]}</div>
        <div>{dayOfWeek[3]}</div>
        <div>{dayOfWeek[4]}</div>
        <div>{dayOfWeek[5]}</div>
        <div>{dayOfWeek[6]}</div>
      </div>
    );
  }


export default Days;