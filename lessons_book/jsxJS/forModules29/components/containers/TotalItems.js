import React from 'react';
import {connect} from 'react-redux';

class TotalItems extends React.Component {
   /* constructor(props) {
        super(props);
    }*/

    render = (e) => {

        return (<h3>Total items: {this.props.total?this.props.total:0 } </h3>);
    }
}

//Указывает с какими данными работатет компонент
//из состояния в свойства
function mapStateToProps(state) {
    //возвращает из хранилища
    return {
        total:state.data?Object.keys(state.data).length:0  // из хранилища allReducers.state
    };
}
//import { withRouter } from 'react-router-dom'
//export default withRouter(connect(mapStateToProps)(TotalItems) )﻿
export default connect(mapStateToProps)(TotalItems)
//выводим CarsList с данними из хранилища через mapStateToProps
