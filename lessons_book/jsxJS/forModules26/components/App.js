import React from 'react'
import { hashHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import WebPage from "./WebPage";
import { Route } from 'react-router-dom'

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('App',props);
    }
    render (){
        return (
            <div>
                <h4 style={{ marginTop: '1.5em' }}>{this.props.children}</h4>
            </div>
        )
    }
}
export  default App;