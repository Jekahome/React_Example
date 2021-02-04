import React from 'react';


import TotalItems from './containers/TotalItems';
import Blocks from './containers/Blocks.jsx';
import Track from './containers/Track.jsx';
import Search from './containers/Search.jsx';


 const WebPage = () => (
    <div  style={{backgroundColor:"grey"}}>
        <h3>I am  WebPage!</h3>
        <Search/>
        <TotalItems/>
        <hr/>
        <Blocks/>
        <br/>
        <Track/>
        <br/>

    </div>
);
 export default WebPage


/*
         <Search/>
        <TotalItems/>
        <hr/>
        <Blocks/>
        <br/>
        <Track/>
        <br/>
 */