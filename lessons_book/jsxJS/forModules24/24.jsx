import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promisesMiddleware from './middlewares/promises.js';
import reducers from './reducers';
// import {getIssues} from "./api";

//визуализатор
import WebPage from './components/WebPage.jsx';




//------------------------------------------------------
// при вызове store.dispatch будет вызыватся reducer

// const store = createStore(reducers);
//------------------------------------------------------
//применить promisesMiddleware над ф-цией createStore
let createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);
//------------------------------------------------------



ReactDOM.render(
    <Provider store={store}>
        <WebPage/>
    </Provider>,
    document.getElementById("app")
);



//подписаться на изменения в store
store.subscribe(()=>{
    console.log('subscribe:',store.getState());
});



//вызов store событий
//вместо них существуют actionCreator
/*
console.log(1);
store.dispatch({
    type:"INCREASE_COUNTER"
});
console.log(2);
store.dispatch({
    type:"INCREASE_COUNTER"
});
console.log(3);
store.dispatch({
    type:"RESET_COUNTER"
});

console.log(4);
store.dispatch({
    type:"UNKNOWN"
});
console.log(5);
store.dispatch({
    type:"ISSUESE_LOADED",
    payload:[{id:1,name:'First issues'},{id:2,name:'Second issues'}]
});
*/



//console.log(6);
//асинхронность
//dispatch своих данных не верных для redux
//store.dispatch(getIssues());
/*store.dispatch({
    type:"PROMISE",
    actions:['ISSUESE_LOADING','ISSUESE_LOADED','ISSUESE_LOAD_FAILURE'],
    promise:getIssues()
});*/





/*
ReactDOM.render(
    <Provider store={store} >
        <WebPage />
    </Provider>,
    document.getElementById("app")
);
*/