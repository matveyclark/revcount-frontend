const initialState = {
    username: null,
    starterEmail: null
}

const userReducer = (state = initialState, action) => {

    if(action.type === 'LOGIN_USER') {
        return {
            ...state,
            username: action.payload
        }
    }

    if(action.type === 'ADD_STARTER_EMAIL') {
        return {
            ...state,
            starterEmail: action.payload
        }
    }

    return state
}

export default userReducer