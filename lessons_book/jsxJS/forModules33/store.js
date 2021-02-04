import { createStore,combineReducers } from 'redux';

import {Field,reduxForm, reducer as formReducer} from 'redux-form'

import info from './Reducers.js';


const rootReducers = combineReducers(
    {
        info:info,
        form:formReducer
    }
  );

const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

