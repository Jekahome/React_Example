import {GET_TRACKS} from "./types";

export const asynTracks = ()  => (dispatch, getState) => {
    console.log("asynTracks");

    setTimeout(() => {
        console.log("asynTracks setTimeout");
        dispatch({
            type:GET_TRACKS
        })
    },2000);

   /*
   вместо синхронных, отвечающих сразу
    return {
        type:GET_TRACKS,
        payload:value
    }*/
};

/*
// или полный вариант
export const asynTracks = (value)  => {
    return dispatch => {
            setTimeout(() => {
                dispatch({
                    type:GET_TRACKS
                })
            },2000);
        }
};*/