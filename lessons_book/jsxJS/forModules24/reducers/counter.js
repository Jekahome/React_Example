
// FLUX Standart action
//{type:'INCREASE_COUNTER',payload:...,error:true}

// reducer Должэн
// возвращать новое состояние
// неизменять пришедшее состояние
// быть чистой ф-цией
//не должна быть с чемто связана, быть сама по себе
export default function (state = 0,action) {

    switch (action.type){
        case "INCREASE_COUNTER":
            // return {...state,counter:(state.counter+1)};
            return state+1;
        case "RESET_COUNTER":
            // return {...state, counter:0};
            return 0;
        default:
            return state;
    }
}