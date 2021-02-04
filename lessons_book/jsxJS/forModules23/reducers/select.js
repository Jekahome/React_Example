import {SELECT} from '../actions/types';

// преобразователь действия
// ответная реакция на изменения действия.
// Так как общее хранилище отсылает уведомление на изменение всем подписанным
export default function (state = null,action) {
    console.log('reducers select ',state);
    switch (action.type){
        case SELECT:
           // return {...state,data:action.payload};
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}