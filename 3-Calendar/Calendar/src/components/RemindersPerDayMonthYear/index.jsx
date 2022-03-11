import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import "../../css/style.css";

export function RemindersPerDayMonthYear(props) {

    const { 
      daySelected,
      setDaySelected,
      indexMonthSelected, 
      setIndexMonthSelected,
      monthsInYear,
      yearSelected, 
      setYearSelected,
      setReminderSelected,
      setOpenReminderAddUpdate,
      openRemindersPerDayMonthYear, 
      setOpenRemindersPerDayMonthYear,
      remindersPerDayMonthYear
    } = props;

  
    const handleClose = () => {
        setOpenRemindersPerDayMonthYear(false);
    };

    //open modal ReminderAddUpdate -> exist  reminder 
    function onClickRow(reminder){
        setOpenRemindersPerDayMonthYear(false);

        setDaySelected(daySelected)
        setIndexMonthSelected(indexMonthSelected)
        setYearSelected(yearSelected)

        setReminderSelected(reminder)

        setOpenReminderAddUpdate(true)
    }

    //open modal ReminderAddUpdate -> new reminder
    function onClickNew () {
      setReminderSelected(null)
      
      setOpenRemindersPerDayMonthYear(false);

      setDaySelected(daySelected)
      setIndexMonthSelected(indexMonthSelected)
      setYearSelected(yearSelected)

      setOpenReminderAddUpdate(true)
    }
   

  

  return (
    <div>
    <Dialog open={openRemindersPerDayMonthYear} onClose={handleClose}>
      <DialogTitle>
        Reminders {monthsInYear[indexMonthSelected]} {daySelected} , {yearSelected} 
         
      </DialogTitle>
      <DialogContent>
            <div>
                <Button 
                  variant="contained" 
                  type="submit"
                  onClick={() => onClickNew()} 
                >
                    New Reminder
                </Button>
            </div>

            <br/>


           
              <table id="customers-table">
              <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Time</th>
                    <th>City</th>
                </tr>
              </thead>
              <tbody>
              {remindersPerDayMonthYear.sort((a, b) => (a.time > b.time) ? 1 : -1).map((r) => (
                            <tr onClick={() => onClickRow(r)} key={r.idReminder} >
                                <td>{r.idReminder}</td>
                                <td>{r.user}</td>
                                <td>{r.time}</td>
                                <td>{r.city}</td>
                            </tr>
                  ))}
                </tbody>
              </table>
           
      </DialogContent>
    </Dialog>
  </div>

  
  );
}
  
export default  RemindersPerDayMonthYear;

