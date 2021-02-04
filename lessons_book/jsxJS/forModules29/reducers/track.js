import {SELECT_TRACKS} from '../actions/types';

// преобразователь действия
// ответная реакция на изменения действия.
// Так как общее хранилище отсылает уведомление на изменение всем подписанным
export default function (state = [],action) {
    console.log('reducers Track ',state);
    switch (action.type){
        case SELECT_TRACKS:
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}