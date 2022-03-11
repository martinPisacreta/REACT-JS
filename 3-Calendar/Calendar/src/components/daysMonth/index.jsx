import React from "react";
import getDaysMonths from '../../helper'
import {useSelector} from 'react-redux'



//Create the component for the days of the month
function DaysMonths (props) {
   const {
      setDaySelected,
      indexMonthSelected, 
      setIndexMonthSelected,
      monthSelected,
      yearSelected, 
      setYearSelected,
      setReminderSelected,
      setOpenReminderAddUpdate,
      setOpenRemindersPerDayMonthYear,
      setRemindersPerDayMonthYear

} = props

 

  const reminders = useSelector(state => state.remindersReducer.reminders ? state.remindersReducer.reminders : [])


//With firstDayInPreviousMonth finds the first day of the month
  function firstDayInPreviousMonth() {
    let day = "01";
    let days = [0, 1, 2, 3, 4, 5, 6];
    let date = new Date(monthSelected + " " + day + "," + yearSelected + " 12:00:00");
    let Day = days[date.getUTCDay()];

    return Day;
  }



  

  function openModal(daySelected,indexMonthSelected,yearSelected,remindersPerDayMonthYear) {
    if(daySelected !== ' ') {
      if(remindersPerDayMonthYear.length > 0) { //open modal RemindersPerDayMonthYear
          setDaySelected(daySelected)
          setIndexMonthSelected(indexMonthSelected)
          setYearSelected(yearSelected)
          setRemindersPerDayMonthYear(remindersPerDayMonthYear)
          setOpenRemindersPerDayMonthYear(true)
      }
      else {  //open modal ReminderAddUpdate -> new reminder
        setReminderSelected(null)
        setDaySelected(daySelected)
        setIndexMonthSelected(indexMonthSelected)
        setYearSelected(yearSelected)
        setOpenReminderAddUpdate(true)
      }
    }

   
  }

  
// In get Tablero an array is obtained with the days of the month.
  function Tablero() {
    let nuevoArray = [];
    let cont = 0;
    let cont2 = 0;
    let day = firstDayInPreviousMonth();
    let end = getDaysMonths(yearSelected,indexMonthSelected);
    // We traverse the array with some conditions to fill the calendar array.
    for (let i = 0; i < 6; i++) {
      nuevoArray[i] = [];
      for (let j = 0; j < 7; j++) {
        cont2++;
        if (cont2 > day && cont < end) {
          cont++;
          nuevoArray[i][j] = cont;
        } else {
          nuevoArray[i][j] = " ";
        }
      }
    }

    return nuevoArray;
  }
  

 
 
   let fecha = new Date();
   let indexMonthCurrent = fecha.getMonth();
   let yearCurrent = fecha.getFullYear();
   let dayCurrent = fecha.getDate();
   let tablero = Tablero();
   let nuevoArray = tablero?.map(function(item ,indexItem) { 
     let listItems = item.map(function(daySelected, indexDaySelectedCalendarNumber) {
   
       let clases = (indexDaySelectedCalendarNumber === 0 || indexDaySelectedCalendarNumber === 6) ? "Weekend" : "Week";
       if (dayCurrent === daySelected && indexMonthCurrent === indexMonthSelected  && yearCurrent === yearSelected) {
         clases = "Hoy";
       }


      
      let remindersPerDayMonthYear = []
 
      reminders.map(function(r) {
          if(daySelected === r.day && indexMonthSelected === r.month   && yearSelected === r.year)
          {
            remindersPerDayMonthYear.push(r)
          }
      })
     
      
      return <div 
                className={clases} 
                onClick={() => openModal(daySelected,indexMonthSelected,yearSelected,remindersPerDayMonthYear)} 
                key={indexDaySelectedCalendarNumber}
              >
                {daySelected}
                <br/>
                <br/>
                {
                    remindersPerDayMonthYear.length > 0  && <span>Reminders ({remindersPerDayMonthYear.length})</span>                         
                }
              </div>
     });
     

     return <div className="DaysMonths" key={indexItem}>{listItems}</div>;
   });
   return <div>{nuevoArray} </div>;
  
 
   
  

   
  
   
}




export default DaysMonths;
