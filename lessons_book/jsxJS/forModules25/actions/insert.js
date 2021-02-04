import {INSERT} from '../actions/types';
// действие дожно возвращать объект для состояния

export const ActionInsert = (value)  => {
    console.log("ActionInsert",value);
    return {
        type:INSERT,
        payload:value
    }
};