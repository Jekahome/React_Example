import {SEARCH_LOAD} from "./types";

// сокращенный вариант
export const asynSearch = (value)  => dispatch => {
    //console.log("SEARCH_LOAD=",e.target);

        dispatch({
            type:SEARCH_LOAD,
            payload:value
        })

};
/*
// или полный вариант
export const asynSearch = (value)  => {
    return dispatch => {
            dispatch({
                type:SEARCH_LOAD,
                payload:value
            })
        }
};*/
