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

    if(action.type === 'ADD_PROJECT') {
        return {
            ...state, 
            projects: [...state.projects, action.payload],
            selectedProject: action.payload
        }
    }

    if(action.type === 'CLEAR_PROJECT') {
        return {
            ...state,
            selectedProject: null
        }
    }

    return state

}

export default projectReducer