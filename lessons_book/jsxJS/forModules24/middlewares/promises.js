//небольшие ф-ции которые встраиваются и работают с тем что мы dispatchнули до того как вызовется оригинальный редуксовый dispatch
//Задача middleware привести в понятный для redux формат данные которые мы dispatchнули до самого rewdux
const middleware = store => next =>action =>{


    if(action.type !== 'PROMISE'){
        return next(action);
    }


    const [startAction,successAction,failureAction] = action.actions;



     // вызов обновления store по типу  ISSUES_LOADING
    store.dispatch({
        type:startAction
    });

    // вызов обновления store по типу ISSUES_LOADED , ISSUES_LOAD_FAILURE
    action.promise.then(
        (data)=>store.dispatch({
                                type:successAction,
                                payload:data //передача данных из api в store
                              }),
        (error)=>store.dispatch({
                                type:failureAction,
                                payload:error})
    );


   /* if(action.then){
        console.log('Its Promise ')
    }*/
};

// Первым отработает store.dispatch(getIssues()) index.js
// потом next
export default middleware;