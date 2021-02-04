
import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';



//визуализатор
import WebPage from './components/WebPage.jsx';



//debugger;

//создаем хранилище
//const store = createStore (allReducers);

//let createStoreWithMiddleware = applyMiddleware(dataMiddleware)(createStore);
//const store = createStoreWithMiddleware(allReducers);
//создаем провайдера reducers



//подписаться на изменения в store
store.subscribe(()=>{
    console.info('subscribe:',store.getState());
});

// активируем загрузку middleware
store.dispatch({
    type:"LOAD"
});


// передача компоненту стартовых данных

ReactDOM.render(
    <Provider store={store} >
        <WebPage />
    </Provider>,
    document.getElementById("app")
);






