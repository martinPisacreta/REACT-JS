import React from "react";
import "../../css/style.css";
import Button from '@mui/material/Button';

// This is the months component and when you click on the buttons you access the previous month or the next month.
function Months (props) {
  const {
          yearSelected, 
          monthSelected,  
          changeMonth,
          setYearSelected,
          setIndexMonthSelected
        } = props
// The functions for the event are created at the time of clicking.
  function hadleClickLeft(e) {
    changeMonth(-1);
  }
  
  function hadleClickRigth(e) {
    changeMonth(1);
  }

  function hadleClickGo() {
    let newDate = new Date();
    setYearSelected(newDate.getFullYear())
    setIndexMonthSelected(newDate.getMonth())
  }
  

    return (
      // The names of the months are returned so that they can be seen in the div later in the parent component.
      <div className="Months">
          <Button 
            variant="contained"
            color="success"
            type="submit"
            onClick={() => hadleClickGo()} 
          >
              Go to current month
          </Button>
        <button onClick={hadleClickLeft}> &lt; </button>
        <div>
          <h3>{monthSelected}, {yearSelected}</h3>
        </div>

        <button onClick={hadleClickRigth}> &gt; </button>
      </div>
    );
  
}

export default Months
