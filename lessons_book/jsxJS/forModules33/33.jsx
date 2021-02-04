import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store.js';

import EditPost from './EditPost';
import Posts from './Posts';

const Root =({store})=>(
    <Provider store={store} >
        <div>
            <EditPost/>
            <br/>
            <Posts/>
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('app')
);