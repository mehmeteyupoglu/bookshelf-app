import * as Actions from "./types"

const initialState = {
    books: []
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.ADD_BOOKS: 
            return {
                ...state, 
                books : [...state.books, action.payload]
            }
        default: 
            return state
    }
}

export default bookReducer