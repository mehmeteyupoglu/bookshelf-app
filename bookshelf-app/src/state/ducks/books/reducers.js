import * as Actions from "./types"

const initialState = {
    data: []
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.ADD_BOOKS: 
            return {
                ...state, 
                data : [...state.data, action.payload]
            }
        case Actions.SET_BOOKS: 
            return {
                ...state, 
                data : action.payload
            }
        default: 
            return state
    }
}

export default bookReducer