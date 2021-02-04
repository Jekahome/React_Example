import React from 'react'
//import { hashHistory } from 'react-router'
import { Link } from 'react-router-dom'
import {Router, Route, hashHistory } from 'react-router';

import Menu from './Menu';


class App extends React.Component {

    constructor(props) {
        super(props);
 /*
    console.log('App',props);
    children:null
    location:{pathname: "/29", search: "", hash: "", state: undefined, action: "POP", …}
    params:{}
    route:{exact: true, path: "/29", component: ƒ}
    routeParams:{}
    router:{getCurrentLocation: ƒ, listenBefore: ƒ, listen: ƒ, transitionTo: ƒ, push: ƒ, …}
    routes:[{…}]
 */
    }

    render (){
        return (
            <div style={{backgroundColor:"blue"}}>
                <Menu/>
                 <h3>App</h3>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export  default App;