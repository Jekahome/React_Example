import React from "react";
import {Router  , Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import store from "../forModules26/store";
import {syncHistoryWithStore} from "react-router-redux";

import createHistory from 'history/createBrowserHistory'


import createBrowserHistory from 'history/createBrowserHistory';
//const history = syncHistoryWithStore(createHistory({basename: '/'}),store);
const history = createHistory({basename: '/'});


const BasicExample = () => (
    <Router history={history}>
        <div>
            <ul>
                <li>
                    <Link to="/27">Home</Link>
                </li>
                <li>
                    <Link to="/27/about">About</Link>
                </li>
                <li>
                    <Link to="/27/topics">Topics</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/27" component={Home} />
            <Route path="/27/about" component={About} />
            <Route path="/27/topics" component={Topics} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);




ReactDOM.render(
    <Provider store={store}>
    <BasicExample/>
    </Provider>,
    document.getElementById('app')
);



