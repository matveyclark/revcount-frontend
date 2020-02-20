const initialState = {
    projects: [],
    selectedProject: null
}

const projectReducer = (state = initialState, action) => {

    if(action.type === 'SET_PROJECTS') {
        return {
            ...state,
            projects: action.payload
        }
    }

    if(action.type === 'SELECT_PROJECT') {
        return {
            ...state,
            selectedProject: action.payload
        }
    }

    return state

}

export default projectReducer