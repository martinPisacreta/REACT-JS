import React, { useState , useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "../../css/style.css";
import { remindersActions } from '../../actions';
import moment from "moment";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import getDaysMonths from '../../helper'
import { useDispatch } from 'react-redux'

export  function ReminderAddUpdate(props) {
  const { 

          daySelected,
          indexMonthSelected, 
          monthsInYear,
          yearSelected, 
          reminderSelected,
          openReminderAddUpdate,
          setOpenReminderAddUpdate
        } = props;


  

  const dispatch = useDispatch()

  const handleClose = () => {
    setOpenReminderAddUpdate(false);
  };

  //if I select a reminder to modify, I set the value of the reminder, otherwise the value is empty.
  const initialValues = {  
    idReminder: reminderSelected ? reminderSelected.idReminder :  0,    
    user: reminderSelected ? reminderSelected.user :  '',
    time: reminderSelected ? reminderSelected.time :  moment().format("HH:mm"),
    city: reminderSelected ? reminderSelected.city :  '',
    reminder: reminderSelected ? reminderSelected.reminder :  '',
    weather: reminderSelected ? reminderSelected.weather :  '',
    classWeather:  reminderSelected ? 'weather-label-good' :  '',

    day: daySelected,
    month: indexMonthSelected,
    year: yearSelected


  }

 
  
  



  var validationSchema = Yup.object().shape({
    day: Yup.string()
      .required('Is required')
      .max(2, 'Max 2 characters'),
    year: Yup.string()
      .required('Is required')
      .max(4, 'Max 4 characters')
      .min(4, 'Min 4 characters'),
    user: Yup.string()
        .required('Is required')
        .max(30, 'Max 20 characters'),
    time: Yup.string()
        .required('Is required')
        .max(30, 'Max 30 characters'),
    city: Yup.string()
      .required('Is required')
      .max(30, 'Max 30 characters'),
    reminder: Yup.string()
        .required('Is required')
        .max(30, 'Max 30 characters')
  });    


  
   
  function onSubmit(fields, {setSubmitting }) {
      reminderSelected ? dispatch(remindersActions.updateToReminders(fields))
                       : dispatch(remindersActions.addToReminders(fields))
                    
      setSubmitting(false);                 //stop spinner button
      setOpenReminderAddUpdate(false); //close modal
    }

    const onBlurCity = async(daySelected ,indexMonthSelected , yearSelected , city , setFieldValue , setSubmitting ) => {
      try {

        
        let message = '';;

        if(city !== '') {
            setSubmitting(true);
            await axios.get("/api/location/search/?query=" + city)
            .then(respuesta1 => {
              if(respuesta1.data.length === 0) {

                //ERROR
                message = 'City not exist'
                setFieldValue('weather',message)
                setFieldValue('classWeather','weather-label-bad')
                setFieldValue('city','')
                setTimeout( () =>  setFieldValue('weather',''),2000);
                setSubmitting(false)

              }
              else {
                const city = respuesta1.data[0].title
                message = 'City: ' + city
                const url = "api/location/" + respuesta1.data[0].woeid + "/" + yearSelected + "/" + (indexMonthSelected + 1) + "/" + daySelected + "/";
                axios.get(url)
                .then(respuesta2 => {
                    if(respuesta2.data[0] && respuesta2.data[0].weather_state_name) {
                        message = message + ' - Weather: ' + respuesta2.data[0].weather_state_name
                      }

                      //CORRECT
                      setFieldValue('city',city.toUpperCase())
                      setFieldValue('weather',message)
                      setFieldValue('classWeather','weather-label-good')
                      setSubmitting(false)
                })
                .catch(() => {
                  setSubmitting(false)
                })
              }
            })
            .catch(() => {
              setSubmitting(false)
            })
          }
        
      }
      catch {
        setSubmitting(false)
      }
      
  }

  //if the day that is written is greater than the number of days in the month, I put the date that comes from props
  function onChangeDay (e,setFieldValue,values,setSubmitting) {
      const re = /^[0-9\b]+$/;
      let valueDay = "";
      if (e.target.value === '' || re.test(e.target.value)) {
        if(e.target.value > getDaysMonths(yearSelected,indexMonthSelected)) {
          valueDay = daySelected;
        }
        else {
          valueDay = e.target.value;
        }
        setFieldValue('day',valueDay)
        onBlurCity(valueDay,values.month,values.year,values.city,setFieldValue,setSubmitting)
    }
  } 
  

  function onChangeMonth (e,setFieldValue,values,setSubmitting)  {
    let valueMonth = e.target.value;
    setFieldValue('month',valueMonth);
    onBlurCity(values.day,valueMonth,values.year,values.city,setFieldValue,setSubmitting)
  };

  function onChangeYear (e,setFieldValue,values,setSubmitting)  {
    const re = /^[0-9\b]+$/;
    let valueYear = "";
    if (e.target.value === '' || re.test(e.target.value)) {
        valueYear = e.target.value;
    }

    setFieldValue('year',valueYear)
    if(valueYear.length === 4) {
      onBlurCity(values.day,values.month,valueYear,values.city,setFieldValue,setSubmitting)
    }
  }


  return (
    <div>
      <Dialog open={openReminderAddUpdate} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Reminder</DialogTitle>
        <DialogContent>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched, isSubmitting , values , setFieldValue , setSubmitting}) => (
                    <Form> 
                 
                        <div className="form-group inline">
                            <Field 
                              name="day" 
                              disabled={reminderSelected ? false : true} 
                              value= {values.day} 
                              type="text" 
                              onChange={e => {onChangeDay(e,setFieldValue,values,setSubmitting)}}
                              className={'form-control' + (errors.day && touched.day ? ' is-invalid' : '')} 
                            />
                            <ErrorMessage 
                              name="day" 
                              component="div" 
                              className="invalid-feedback" 
                            />

                            <Select
                              value={values.month}
                              onChange={(e) => onChangeMonth(e,setFieldValue,values,setSubmitting)}
                              disabled={reminderSelected ? false : true} 
                            >
                              {
                                monthsInYear.map(function(m, i) {
                                  return(
                                    <MenuItem value={i} key={i}>{m}</MenuItem>
                                  )
                                })
                              }
                            </Select>
                           
                            <Field 
                              name="year"  
                              disabled={reminderSelected ? false : true} 
                              type="text" 
                              className={'form-control' + (errors.year && touched.year ? ' is-invalid' : '')} 
                              onChange={e => {onChangeYear(e,setFieldValue,values,setSubmitting)}}
                            />
                            <ErrorMessage 
                              name="year" 
                              component="div" 
                              className="invalid-feedback" 
                            />
                        </div>

                       <div className="form-group">
                            <label>User</label>
                            <Field 
                              name="user" 
                              type="text" 
                              className={'form-control' + (errors.user && touched.user ? ' is-invalid' : '')} 
                              onChange={(e) => {
                                setFieldValue("user", e.target.value.toUpperCase());
                              }}
                            />
                            <ErrorMessage 
                              name="user" 
                              component="div" 
                              className="invalid-feedback" 
                            />
                        </div>

                        <div className="form-group">
                            <label>Time</label>
                            <Field 
                              name="time" 
                              type="time"  
                              className={'form-control' + (errors.time && touched.time ? ' is-invalid' : '')} 
                            />
                            <ErrorMessage 
                              name="time" 
                              component="div" 
                              className="invalid-feedback" 
                            />
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <Field 
                              name="city"    
                              type="text" 
                              onBlur={() => onBlurCity(values.day ,values.month , values.year , values.city , setFieldValue , setSubmitting)} 
                              className={'form-control' + (errors.city && touched.city ? ' is-invalid' : '')} 
                              onChange={(e) => {
                                setFieldValue("city", e.target.value.toUpperCase());
                              }}
                            />
                            <ErrorMessage 
                              name="city" 
                              component="div" 
                              className="invalid-feedback" 
                            />

                           
                        </div>

                        <div className="form-group">
                            <label 
                              className={values.classWeather}
                            >
                              {values.weather}
                            </label>
                        </div>


                        <div className="form-group">
                            <label>Reminder</label>
                            <Field 
                              name="reminder" 
                              type="text" 
                              className={'form-control' + (errors.reminder && touched.reminder ? ' is-invalid' : '')} 
                              onChange={(e) => {
                                setFieldValue("reminder", e.target.value.toUpperCase());
                              }}
                            />
                            <ErrorMessage 
                              name="reminder" 
                              component="div" 
                              className="invalid-feedback" 
                            />
                        </div>
                        
                        
                        <div className="form-group">
                            <Button 
                              variant="contained" 
                              type="submit" 
                              disabled={isSubmitting}
                            >
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                {reminderSelected ? 'Update Reminder' : 'Add Reminder'}
                            </Button>
                        </div>
                   
                    </Form>
                    )}
            </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}






export default  ReminderAddUpdate;