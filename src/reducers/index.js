import { combineReducers } from 'redux'
import userReducer from './userReducer'
import projectReducer from './projectReducer'

export default combineReducers({
    userReducer,
    projectReducer
})