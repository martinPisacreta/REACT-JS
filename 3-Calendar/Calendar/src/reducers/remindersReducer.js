import { ADD_REMINDER} from "../actions";
import { UPDATE_REMINDER} from "../actions";

const initialUserState = {
  reminders: []
}

 export default function RemindersReducer(state = initialUserState, action) {
     switch (action.type){
        case ADD_REMINDER :
            return {
                ...state,
                reminders: [
                  ...state.reminders,
                  {
                    idReminder: state.reminders.length !==0 ? state.reminders[state.reminders.length - 1].idReminder + 1 : 1,
                    user: action.payload.user,
                    time: action.payload.time,
                    city: action.payload.city,
                    weather: action.payload.weather,
                    reminder: action.payload.reminder,
                    day: parseInt(action.payload.day),
                    month: parseInt(action.payload.month),
                    year: parseInt(action.payload.year)
                  }
                ]
            };
        case UPDATE_REMINDER:
            return {
              ...state,
              reminders: state.reminders.map((reminder) => 
              reminder.idReminder === action.payload.idReminder 
                  ?
                    { 
                        ...reminder, 
                        idReminder: action.payload.idReminder,
                        user: action.payload.user,
                        time: action.payload.time,
                        city: action.payload.city,
                        weather: action.payload.weather,
                        reminder: action.payload.reminder,
                        day: parseInt(action.payload.day),
                        month: parseInt(action.payload.month),
                        year: parseInt(action.payload.year)
                    } 
                  : 
                    reminder
              ) 
            };
        default:
            return state
     }
}

