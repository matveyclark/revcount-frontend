import { combineReducers } from 'redux'
import userReducer from './userReducer'
import projectReducer from './projectReducer'

const appReducer =  combineReducers({
    userReducer,
    projectReducer
})

const rootReducer = (state, action) => {

    if(action.type === 'LOGOUT_USER') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer