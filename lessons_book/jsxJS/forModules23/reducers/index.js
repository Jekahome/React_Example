import {combineReducers} from 'redux';
import Select from './select.js';
import Update from './update.js';

const reducers =  combineReducers({
    data:Select,
    update:Update
    //... другие снимки состояния
});
export default reducers
