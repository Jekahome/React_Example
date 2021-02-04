import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {asynSearch} from "../../actions/asynSearch";
import store from '../../store';
import {SEARCH} from '../../actions/types';

class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    search = (e) =>{
        this.props.asynSearch(e.target.value);
    }


    render = (e) =>{
         let This = this;
        return (<div>
                <input onInput={this.search} /*ref={ (input) =>{this.input = input} }*/ placeholder='input text' />
                <br/>
                <br/>
                <ul >
                    {
                        Object.keys(this.props.search).map( function (key,index){
                                return <li key={key}>{This.props.search[key] }  </li>
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}




//Указывает с какими данными работатет компонент
//из состояния в свойства
function mapStateToProps(state) {
    //возвращает из хранилища
    return {
        search:state.search // из хранилища store

    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        asynSearch:asynSearch
    },dispatch);
}


export default  connect(mapStateToProps,matchDispatchToProps)(Search)
//выводим CarsList с данними из хранилища через mapStateToProps

