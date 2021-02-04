import {combineReducers} from 'redux';
import counterReducer from './counter';
import issuesReducer from './issues';


const allReducers =  combineReducers({
    counter:counterReducer,
    issues:issuesReducer ,
    //repository:state.repository,
    //... другие компоненты сайта
});
export default allReducers
