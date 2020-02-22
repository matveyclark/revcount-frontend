const initialState = {
    selectedRevision: null
}

const revisionReducer = (state = initialState, action) => {

    if(action.type === 'SELECT_REVISION') {
        return {
            ...state,
            selectedRevision: action.payload
        }
    }

    if(action.type === 'CLEAR_REVISION') {
        return {
            ...state,
            selectedRevision: null
        }
    }

    return state
}

export default revisionReducer