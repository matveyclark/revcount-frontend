import { combineReducers } from 'redux'
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import revisionReducer from './revisionReducer'

const appReducer =  combineReducers({
    userReducer,
    projectReducer,
    revisionReducer
})

const rootReducer = (state, action) => {

    if(action.type === 'LOGOUT_USER') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer