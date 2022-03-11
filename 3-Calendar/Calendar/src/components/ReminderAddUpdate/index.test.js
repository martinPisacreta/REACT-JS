import React from 'react'
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider , useDispatch} from 'react-redux'
import configureStore from 'redux-mock-store'
import ReminderAddUpdate from './index'


const    daySelected =  1;
const    indexMonthSelected = 2;
const    monthsInYear = [
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
const    yearSelected = 2022; 
const    reminderSelected = {
                                user: 'MARTIN PISACRETA',
                                time:  '20:08',
                                city:  'BUENOS AIRES',
                                weather:  'City: Buenos Aires - Weather: Clear',
                                reminder:  'TODAY',
                                day:  1,
                                month:  2,
                                year:  2022
                            };
const    openReminderAddUpdate = true;



describe('With React Testing Library', () => {
  it('Shows City"', () => {
    const mockStore = configureStore()
    let store,wrapper
    store = mockStore({})
    const { getByText } = render(
                                <Provider store={store}>
                                    <ReminderAddUpdate
                                        daySelected = {daySelected}
                                        indexMonthSelected = {indexMonthSelected}          
                                        monthsInYear = {monthsInYear}
                                        yearSelected = {yearSelected}
                                        reminderSelected = {reminderSelected}
                                        openReminderAddUpdate = {openReminderAddUpdate}
                                    />
                                </Provider>
                            )   

         
    expect(getByText('City')).not.toBeNull()
  })
})

 