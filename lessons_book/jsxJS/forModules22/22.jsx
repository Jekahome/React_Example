
import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './example/reducers';//
import WebPage from './example/components/WebPage.jsx';
import css from './example/css/style.css';// npm install --save-dev style-loader css-loader

//debugger;

//создаем хранилище
const store = createStore (allReducers);

//создаем провайдера reducers



// передача компоненту стартовых данных

ReactDOM.render(
    <Provider store={store} >
        <WebPage />
    </Provider>,
    document.getElementById("app")
);




