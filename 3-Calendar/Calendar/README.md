<div align="center">
    <img src="https://raw.githubusercontent.com/Jobsity/ReactChallenge/main/src/assets/jobsity_logo_small.png"/>
</div>

# React Challenge


## How to start app

 - Run `npm install` | `yarn install` to install all dependencies.
 - Run `npm start`   | `yarn run` to run the app locally.
 - You can find the project running on `localhost:3000`.

## Functionalities
1) When selecting a date which has no reminders, a modal will open to load in: User, Time, City, Reminder

2) When selecting a date which has reminders, a modal will open that shows the reminders on that date, the user can select one of the existing ones to modify it or create a new one on that date

3) When searching for a city, the application will connect with an api https://www.metaweather.com/api/ and will bring the first city and weather from it that matches the typed city

4) Reminders can be loaded on any day of any month and year

5) In case the user is in a month or year other than today, there is a button to return to the current month

6) Today is highlighted in red



## Libraries
Material UI
Formik
Axios

## Api
https://www.metaweather.com/api/
No api key needed
