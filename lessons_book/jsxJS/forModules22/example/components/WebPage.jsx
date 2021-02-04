import React from 'react';

import CarsList from './../containers/cars-list'
import Details from './../containers/details'
import FactoriesList from './../containers/factory-list'


 const WebPage = () => (
    <div >
        <h2>Factories:</h2>
        <FactoriesList/>
        <br/>

        <h2>Cars:</h2>
        <CarsList/>
        <hr/>

        <h3>Details:</h3>
        <Details/>
    </div>
);
 export default WebPage