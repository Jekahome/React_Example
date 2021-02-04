
// FLUX Standart action
//{type:'INCREASE_COUNTER',payload:...,error:true}

// reducer Должэн
// возвращать новое состояние
// неизменять пришедшее состояние
// быть чистой ф-цией
//не должна быть с чемто связана, быть сама по себе
export default function (state = [],action) {

        switch (action.type){

            case "ISSUES_LOADING":
                console.log('Начали грузить пользователей');
                return state;
            case "ISSUES_LOADED":
                console.log('Пользователи грузятся ',action);
                //return {...state,issues:action.data};
                return  action.payload?action.payload:[] ;

            case "ISSUES_LOAD_FAILURE":
                 console.log('ISSUES_LOAD_FAILURE');
                return state;

            default:
                return state;
        }
}



