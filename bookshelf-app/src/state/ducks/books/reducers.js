import * as Actions from "./types"
import { act } from "react-dom/test-utils"

const initialState = {
    data: [], 
    loading: false, 
    filter: "", 
    searchTerm: ""
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
                data : action.payload, 
                loading: false
            }
        case Actions.LOAD_BOOKS: 
            return {
                ...state, 
                 loading: true
            }
        case Actions.SET_FILTER: 
            return {
                ...state, 
                filter : action.payload
            }
        case Actions.SEARCH_BOOKS: 
            return {
                ...state, 
                searchTerm : action.payload
            }
        default: 
            return state
    }
}

export default bookReducer