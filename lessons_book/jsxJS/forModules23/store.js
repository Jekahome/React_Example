
// хранилище компонентов
import reducers from './reducers';
import dataMiddleware from "./middlewares/middleware";
import {createStore,applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(dataMiddleware,thunk),
    // other store enhancers if any
);
const store = createStore(reducers, enhancer);



/*
let createStoreWithMiddleware = applyMiddleware(dataMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);
*/

export default store;
