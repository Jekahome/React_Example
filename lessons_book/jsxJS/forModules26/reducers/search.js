import {SEARCH} from '../actions/types';

// преобразователь действия
// ответная реакция на изменения действия.
// Так как общее хранилище отсылает уведомление на изменение всем подписанным
export default function (state = [],action) {

    switch (action.type){
        case SEARCH:
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}