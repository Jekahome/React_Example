import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

 import  Home from './components/Home.js'
import  App from './components/App';
 import  About from './components/About';
import  WebPage from './components/WebPage';







//-------------------------------------------------------------------

import { Router, Route, hashHistory,browserHistory } from 'react-router';
import {syncHistoryWithStore } from 'react-router-redux';

import { Link } from 'react-router-dom'
//import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';


//import { createHistory } from 'history';
//import createBrowserHistory from 'history/createBrowserHistory'
//import About from "./components/About";
//import WebPage from "./components/WebPage";
//import Home from "./components/Home";
//визуализатор



const history = syncHistoryWithStore(browserHistory , store);
//синхронизирует event навигации со store
//const history = syncHistoryWithStore(createBrowserHistory({basename: '/26'}),store);
//const history = createBrowserHistory({basename: '/26'});
 //history.listen(location => analyticsService.track(location. pathname ))

//--------------------------------------------------------------------
/*
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router'
*/

//--------------------------------------------------------------------




//debugger;

//создаем хранилище
//const store = createStore (allReducers);

//let createStoreWithMiddleware = applyMiddleware(dataMiddleware)(createStore);
//const store = createStoreWithMiddleware(allReducers);
//создаем провайдера reducers



//подписаться на изменения в store
/*store.subscribe(()=>{
    console.log(store.getState())

});*/

// активируем загрузку middleware
/*store.dispatch({
    type:"LOAD"
});*/

// передача компоненту стартовых данных
ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <Route component={App}>
                    <Route path="/26"  component={Home}/>
                    <Route path="/26/about" component={About}/>
                    <Route path="/26/web-page" component={WebPage}/>
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

/*
├─┬ react@15.3.2 invalid
├── react-axios@2.0.0
├── react-dom@15.3.2
├── react-dom-factories@1.0.2
├─┬ react-hot-loader@3.1.3
│ ├── react-deep-force-update@2.1.1
│ ├─┬ react-proxy@3.0.0-alpha.1
│ ├─┬ redbox-react@1.5.0
├─┬ react-redux@5.0.7
│ ├── hoist-non-react-statics@2.5.0
├─┬ react-router@3.0.2
│ ├── hoist-non-react-statics@1.2.0
├─┬ react-router-dom@4.2.2
│ ├─┬ react-router@4.2.0
│ │ ├── hoist-non-react-statics@2.5.0 deduped
├── react-router-redux@4.0.8
│ ├─┬ react-dock@0.2.4
│ └── react-pure-render@1.0.2
│ ├─┬ react-json-tree@0.11.0
│ │ └─┬ react-base16-styling@0.5.3
│ ├── react-pure-render@1.0.2 deduped

 */

/*
   <Provider store={store}>
        <Router history={history} component={App}>
          <div>
              <header>
                  Links:
                  <br/>
                  <Link to="/">Home</Link><br/>
                  {' '}
                  <Link to="/about">About</Link><br/>
                  {' '}
                  <Link to="/web-page">WebPage</Link><br/>
              </header>
              <div>
                  <button onClick={() => hashHistory.push('/about')}>Go to /about</button>
              </div>
              <Route exact path="/"  component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/web-page" component={WebPage}/>
          </div>
        </Router>
    </Provider>
 */