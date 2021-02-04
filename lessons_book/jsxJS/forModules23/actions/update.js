import {UPDATE} from '../actions/types';
// действие дожно возвращать объект для состояния
export const ActionUpdate = (index)  => {
    console.log("ActionUpdate index=",index);
        return {
            type:UPDATE,
            payload:index
        }
};