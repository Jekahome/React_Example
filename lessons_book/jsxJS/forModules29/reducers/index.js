import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Select from './select.js';
import Update from './update.js';
import Track from './track.js';
import Search from './search.js';
import Users from './users.js';
import User from './user.js';

export default  combineReducers({
    routing:routerReducer,
    data:Select,
    update:Update,
    track:Track,
    search:Search,
    users:Users,
    user:User
    //... другие снимки состояния
});


