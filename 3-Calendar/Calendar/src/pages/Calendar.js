import React, { useState } from 'react';
import  Months  from "../components/months";
import  Days  from "../components/days";
import  DaysMonths  from "../components/daysMonth";
import ReminderAddUpdate from "../components/ReminderAddUpdate"
import RemindersPerDayMonthYear from "../components/RemindersPerDayMonthYear" 



//This is the parent component
function Calendar (props) {


  let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let monthsInYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

 
  let newDate = new Date();
  const [yearSelected,setYearSelected] = useState(newDate.getFullYear()) 
  const [indexMonthSelected,setIndexMonthSelected] = useState(newDate.getMonth()) 
  const [reminderSelected,setReminderSelected] = useState(null);
  const [daySelected,setDaySelected] = useState("");
  const [remindersPerDayMonthYear , setRemindersPerDayMonthYear] = useState([]);
  const [openReminderAddUpdate, setOpenReminderAddUpdate] = useState(false);
  const [openRemindersPerDayMonthYear, setOpenRemindersPerDayMonthYear] = useState(false);
 

  //changeMonth what is done is the change of the month and put it as current.
  function changeMonth(dif) {
    let _indexMonthSelected = indexMonthSelected + dif;
    if (_indexMonthSelected > -1 && _indexMonthSelected < 12) setIndexMonthSelected(_indexMonthSelected);

    if(_indexMonthSelected === 12) {
      setYearSelected( yearSelected + 1)
      setIndexMonthSelected(0)
    }

    if(_indexMonthSelected === -1) {
      setYearSelected( yearSelected - 1)
      setIndexMonthSelected(11)
    }
  }



 
     // what is returned by the child components is returned.
      return (
        <div className="container">
            <ReminderAddUpdate 
              daySelected = {daySelected}
              indexMonthSelected = {indexMonthSelected}          
              monthsInYear = {monthsInYear}
              yearSelected = {yearSelected}
              reminderSelected = {reminderSelected}
            
              openReminderAddUpdate = {openReminderAddUpdate}
              setOpenReminderAddUpdate = {setOpenReminderAddUpdate}
            
           
            />
            <RemindersPerDayMonthYear
             daySelected = {daySelected}
             setDaySelected = {setDaySelected}
             indexMonthSelected = {indexMonthSelected}
             setIndexMonthSelected = {setIndexMonthSelected}
             monthsInYear = {monthsInYear}
             yearSelected = {yearSelected}
             setYearSelected = {setYearSelected}
             setReminderSelected = {setReminderSelected}
             
             setOpenReminderAddUpdate = {setOpenReminderAddUpdate}
             openRemindersPerDayMonthYear = {openRemindersPerDayMonthYear}
             setOpenRemindersPerDayMonthYear = {setOpenRemindersPerDayMonthYear}
             remindersPerDayMonthYear = {remindersPerDayMonthYear}
           
            />
            <h1>Calendar</h1>
            <br/>
            <Months
              monthSelected={monthsInYear[indexMonthSelected]} 
              changeMonth={changeMonth}
              yearSelected = {yearSelected}
              setYearSelected = {setYearSelected}
              setIndexMonthSelected = {setIndexMonthSelected}
            />
            <Days 
              dayOfWeek={dayOfWeek} 
            />
            <DaysMonths
              setDaySelected = {setDaySelected}
              indexMonthSelected = {indexMonthSelected}
              setIndexMonthSelected = {setIndexMonthSelected}
              monthSelected={monthsInYear[indexMonthSelected]} 
              yearSelected = {yearSelected}
              setYearSelected = {setYearSelected}
              setOpenReminderAddUpdate = {setOpenReminderAddUpdate}
              setOpenRemindersPerDayMonthYear = {setOpenRemindersPerDayMonthYear}
              setRemindersPerDayMonthYear = {setRemindersPerDayMonthYear}
              setReminderSelected = {setReminderSelected}
            />
            
        </div>
      )
  }

  export default Calendar;