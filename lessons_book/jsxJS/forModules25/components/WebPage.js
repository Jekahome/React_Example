import React from 'react';
import TotalItems from './../containers/TotalItems.js';
import Blocks from './../containers/Blocks.jsx';
import Track from './../containers/Track.jsx';
import Search from './../containers/Search.jsx';

 const WebPage = () => (
    <div >
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