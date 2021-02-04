import  React from 'react';
import  ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Link,Router, hashHistory,browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import Routes from './Routes';

const history = syncHistoryWithStore(browserHistory, store);


const app = document.getElementById('app');
var div = document.createElement("div");
div.setAttribute('id', 'modal-root');
window.document.body.insertBefore(div, app);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={Routes()} />
    </Provider>,
    document.getElementById('app')
);



/* или так    <Router history={history}>
                <Route  component={App}>
                    <Route exact path="/29"  component={Index}/>
                    <Route path="/29/home"  component={Home}/>
                    <Route path="/29/about" component={About}/>
                    <Route path="/29/webpage" component={WebPage}/>
                </Route>
              </Router>
 */