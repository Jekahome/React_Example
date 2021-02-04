//как функции, которые создают действия
// преобразователь действия
// ответная реакция на изменения действия.
// Так как общее хранилище отсылает уведомление на изменение всем подписанным
export default function (state = null,action) {

    switch (action.type){
         case "CAR_SELECTED":
            return action.payload;
            break;
        default:
            return state;
            break;
    }

}