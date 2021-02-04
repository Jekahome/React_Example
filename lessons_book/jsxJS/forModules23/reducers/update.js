import {UPDATE} from '../actions/types';
// влияет на store.update
export default function (state = null,action) {
    console.log('reducers update',state);
    switch (action.type){
        case UPDATE:
            console.log('reducers update action.payload=',action.payload);
            return action.payload;
         default:
            return -1;
    }

}




