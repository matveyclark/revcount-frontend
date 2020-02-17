const initialState = {
    username: ''
}

const userReducer = (state = initialState, action) => {

    if(action.type === 'LOGIN_USER') {
        return {
            username: action.payload
        }
    }

    return state
}

export default userReducer