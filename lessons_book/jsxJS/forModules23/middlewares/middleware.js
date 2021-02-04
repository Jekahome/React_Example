//небольшие ф-ции которые встраиваются и работают с тем что мы dispatchнули до того как вызовется оригинальный редуксовый dispatch
//Задача middleware привести в понятный для redux формат данные которые мы dispatchнули до самого rewdux
import * as types from '../actions/types';
import {selectStore,insertStore,deleteStore,saveStore} from "../api/data";

const middleware = store => next => action =>{
    console.log("middleware action.type:",action.type);

    if(action.type !== types.LOAD &&
        action.type !== types.INSERT &&
        action.type !== types.DELETE &&
        action.type !== types.SAVE ){
        return next(action);
    }

    if(action.type == types.DELETE){

        deleteStore(action.payload);// удалим запись
        // обновим store
        store.dispatch({
            type:types.SELECT,
            payload:selectStore()
        });
    }

    else if(action.type == types.LOAD){
        // вызов действия с типом SELECT
        store.dispatch({
            type:types.SELECT,
            payload:selectStore()
        });
    }

   else if(action.type  == types.INSERT){
        insertStore(action.payload);// добавим запись
        // обновим store
        store.dispatch({
            type:types.SELECT,
            payload:selectStore()
        });

    }else if(action.type  == types.SAVE){

        saveStore(action.id,action.payload);// обновим запись
        // обновим store
        store.dispatch({
            type:types.SELECT,
            payload:selectStore()
        });

    }

   /* const [startAction,successAction,failureAction] = action.actions;

    store.dispatch({
        type:startAction
    });

    action.promise.then(
        (data)=>store.dispatch({
            type:successAction,
            payload:data
        }),
        (error)=>store.dispatch({
            type:failureAction,
            payload:error})
    );
*/
};

export default middleware;