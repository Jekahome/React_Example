/*import React from 'react';
import ArrBlock from './../containers/ArrBlock.jsx';
import TotalItems from './../containers/TotalItems.js';

 const WebPage = () => (
    <div >
        <h1>Hello console view </h1>
       <TotalItems/>
        <h2>ArrBlock:</h2>
        <ArrBlock/>
        <br/>
    </div>
);
 export default WebPage
*/

import React from 'react';
import {connect} from 'react-redux';
import {loadIssues} from '../actions/actions.js';// действие
import {bindActionCreators} from 'redux';


class WebPage extends React.Component{
    handleClick =(e)=>{
        this.props.loadIssues();
    }

     render(){
         return (
             <div>
                 <h1>Hello console view {this.props.counter}</h1>
                 <button onClick={::this.handleClick}>Load issues</button>
                 <ul>
                     { this.props.issues.map( (item,i) => <li key={i}>{item.title}</li> ) }
                 </ul>
             </div>
         )
     }
 }


/*

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loadIssues:loadIssues

    },dispatch);
}

*/


// первый аргумент - нужные данные из store
//второй аргумент - (actionCreator) что бы из компонента вызвать dispacth не привязываясь явно к store
export  default connect(
    (state)=>{
        return {
                 counter:state.counter,
                 issues:state.issues // получение данных из store <- middlewares <- api
                };
    },
    /*matchDispatchToProps*/(dispatch) => bindActionCreators({loadIssues},dispatch)
)(WebPage);
