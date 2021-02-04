import React from 'react';
import { Route } from 'react-router';
 import { Switch } from "react-router-dom";

import Home from './components/Home.js'
import App from './components/App';
import About from './components/About';
import WebPage from './components/WebPage';
import Index from './components/Index';
import Users from './components/Users';
import User from './components/User';


 function Routes() {
    return (
        <Route component={App}>
            <Switch>
                <Route  exact={true}  path="/29"  component={Index}/>
                <Route  exact={true} path="/29/home/:testId"  component={Home}/>
                <Route  exact={true} path="/29/about" component={About}/>
                <Route  exact={true} path="/29/users" component={Users}>
                   <Route  exact={true} path=":userId" component={User}/>
                </Route>
                <Route  exact={true} path="/29/webpage" component={WebPage}/>
           </Switch>
        </Route>
    );
}

export default Routes;
//    <Route path=":userId" component={User}/>