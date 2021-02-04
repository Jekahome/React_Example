import {DELETE} from '../actions/types';
// действие дожно возвращать объект для состояния
export const ActionDelete = (id)  => {
    console.log("ActionDelete",id);

    return {
        type:DELETE,
        payload:id
    }
};