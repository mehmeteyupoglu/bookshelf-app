import * as Actions from "./types"
import axios from "axios"
import {apiHost} from "../../../constants"

export const addBook = values => {
    return dispatch => {
        axios.post(`${apiHost}/Books`, values).then((result) => {
            dispatch({type: Actions.ADD_BOOKS, payload: result.data})
        }).catch((err) => {
            console.log(err)
        })  
    } 
}

export const getBook = () => {
    return dispatch => {
        axios.get(`${apiHost}/Books`).then((result) => {
            dispatch({
                type: Actions.SET_BOOKS, 
                payload: result.data
            })
        }).catch((err) => {
            console.log(err)
        })  
    } 
}