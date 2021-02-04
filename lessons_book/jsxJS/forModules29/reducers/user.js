import {GET_USER} from '../actions/types';

export default function (state = [],action) {
    console.log('reducers user', action)
    switch (action.type){
        case GET_USER:
            return action.payload;
        default:
            return state;
    }

}