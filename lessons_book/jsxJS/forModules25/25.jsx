
import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import { Home} from './components/Home.js'
import { App} from './components/App';
import { About} from './components/About';
import { WebPage} from './components/WebPage';



//import { Router } from 'react-router'




//-------------------------------------------------------------------
import { Switch,   browserHistory } from 'react-router'
import {  Router, Route } from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'

//import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';


//import { createHistory } from 'history';
import createBrowserHistory from 'history/createBrowserHistory'
//визуализатор




//синхронизирует event навигации со store
const history = syncHistoryWithStore(createBrowserHistory(),store);
//history.listen(location => analyticsService.track(location.pathname))

//--------------------------------------------------------------------

//import { BrowserRouter as Router, Route } from 'react-router-dom'



//--------------------------------------------------------------------




//debugger;

//создаем хранилище
//const store = createStore (allReducers);

//let createStoreWithMiddleware = applyMiddleware(dataMiddleware)(createStore);
//const store = createStoreWithMiddleware(allReducers);
//создаем провайдера reducers



//подписаться на изменения в store
store.subscribe(()=>{
    console.log(store.getState())

});

// активируем загрузку middleware
store.dispatch({
    type:"LOAD"
});


// передача компоненту стартовых данных
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/25" component={App}>
                <Switch>
                    <Route path="home"  component={Home}/>
                    <Route path="about" component={About}/>
                    <Route path="web-page" component={WebPage}/>
                </Switch>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);


/*
  <Provider store={store}>
            <Router history={history}>
                <Route exact path="/25" component={App}>
                    <Switch>
                        <Route path="home"  component={Home}/>
                        <Route path="about" component={About}/>
                        <Route path="web-page" component={WebPage}/>
                    </Switch>
                </Route>
            </Router>
    </Provider>
*/