import {combineReducers} from 'redux'
import {todos} from './todos'
import {user} from './user'


//combino todos los reducers 
export default combineReducers({
    todos,
    user
})