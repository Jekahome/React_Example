import {combineReducers} from 'redux';
import Select from './select.js';
import Update from './update.js';
import Track from './track.js';
import Search from './search.js';
import {routerReducer} from 'react-router-redux';

const reducers =  combineReducers({
    routing:routerReducer,
    data:Select,
    update:Update,
    track:Track,
    search:Search
    //... другие снимки состояния
});
export default reducers

