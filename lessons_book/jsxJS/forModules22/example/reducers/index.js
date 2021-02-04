import {combineReducers} from 'redux';
import CarsReducers from './car.js';
import ActiveCar from './car-active.js';
import FactoriesReducers from './factory.js';

const allReducers = combineReducers({
    cars:CarsReducers,
    activeCar:ActiveCar,
    factories:FactoriesReducers
    //... другие компоненты сайта
});

export default allReducers