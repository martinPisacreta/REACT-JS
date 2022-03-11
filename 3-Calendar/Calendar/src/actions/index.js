export const ADD_REMINDER = "ADD_REMINDER";
export const UPDATE_REMINDER = "UPDATE_REMINDER";


export const remindersActions = {
    addToReminders,
    updateToReminders
};


function  addToReminders  (fields) {
    const user  = fields.user;
    const time  = fields.time;
    const city  = fields.city;
    const reminder  = fields.reminder;
    const weather = fields.weather;
    const day = fields.day;
    const month = fields.month
    const year = fields.year

    const payload = {
        user, 
        time,
        city,
        weather,
        reminder,
        day,
        month,
        year
        
    }

    return dispatch => {
        dispatch(success(payload))        
    };

    function success(payload) { return { type: ADD_REMINDER, payload } }
}

function  updateToReminders  (fields) {


    const idReminder  = fields.idReminder;
    const user  = fields.user;
    const time  = fields.time;
    const city  = fields.city;
    const reminder  = fields.reminder;
    const weather = fields.weather;
    const day = fields.day;
    const month = fields.month
    const year = fields.year
    

    const payload = {
        idReminder,
        user, 
        time,
        city,
        weather,
        reminder,
        day,
        month,
        year
        
    }

 
    return dispatch => {
        dispatch(success(payload))        
    };

    function success(payload) { return { type: UPDATE_REMINDER, payload } }
}