//небольшие ф-ции которые встраиваются и работают с тем что мы dispatchнули до того как вызовется оригинальный редуксовый dispatch
//Задача middleware привести в понятный для redux формат данные которые мы dispatchнули до самого rewdux
import * as types from '../actions/types';
import {selectStore,insertStore,deleteStore,saveStore,getTrack,search,users} from "../api/data";


const middleware = store => next => action =>{
    console.log("middleware action.type:",action.type);

    if(action.type !== types.LOAD &&
        action.type !== types.INSERT &&
        action.type !== types.DELETE &&
        action.type !== types.SAVE &&
        action.type !== types.GET_TRACKS &&
        action.type !== types.SEARCH_LOAD &&
        action.type !== types.GET_USERS &&
        action.type !== types.GET_USER){
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
        store.dispatch({
            type:types.SEARCH,
            payload:[]
        });

    }
    else if(action.type  == types.GET_TRACKS){


        // обновим store
        store.dispatch({
            type:types.SELECT_TRACKS,
            payload:getTrack()
        });

    } else if(action.type  == types.SEARCH_LOAD){

         if(!action.payload){
             store.dispatch({
                 type:types.SEARCH,
                 payload:[]
             });
         }else{

             store.dispatch({
                 type:types.SEARCH,
                 payload:search(action.payload)
             });
         }


    }else if(action.type  == types.GET_USERS){

        const data = users();
        action.payload = data.users;
        return next(action);// проброс дальше в redusers
    }else if(action.type  == types.GET_USER){

        let data = users();
        const integer = parseInt(action.payload);
        let obj=null;
        data.users.map(function(item){

           if(!obj && parseInt(item.id) === integer){
               obj = item;
           };
        });
        if(!obj){

            obj={id:parseInt(Date.now()),name:"name",github:"git",twitter:"twit"};
        }

        console.log('#$#$#$',obj);

        action.payload =  obj;
        return next(action);// проброс дальше в reducers
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