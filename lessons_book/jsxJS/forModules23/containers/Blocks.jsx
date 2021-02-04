import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Block from './Block.jsx';

import PropTypes from 'prop-types';

import store from '../store';
import {ActionInsert} from "../actions/insert";
import {ActionSelect} from "../actions/select";
import {ActionDelete} from "../actions/delete";
import * as types from "../actions/types";

class Blocks extends React.Component {
     constructor(props) {
        super(props);
      //  this.props.ActionSelect();
    }

    componentWillMount() {
        //this.setState({total: this.state.qty * this.props.price});
    }

    render = (e) =>{

       var This = this;
       var keyUpdate=false;

        if(This.props.data){
            //console.log('This.props.data',This.props.data);
            return ( <div> {

                Object.keys(This.props.data).map( function (key,index){
                        if(parseInt(This.props.update)===parseInt(key)){
                            keyUpdate=true;
                        }else{
                            keyUpdate=false;
                        }
                        //console.log("Blocks=",This.props.update,index,keyUpdate);
                        //this.props.ActionSelect({text:this.props.data[key]});
                        return <Block key={key} id={key} update={keyUpdate} text={This.props.data[key] }  deleteBlock={This.deleteBlock} />
                    }
                )
            }
                <button onClick={this.insertBlock} className="plus">{' + '}</button>
            </div>);
        }else{
            return (<div><button onClick={this.insertBlock} className="plus">{' + '}</button></div>)
        }

    }

    insertBlock = (e) =>{

        /*store.dispatch({
            type:'INSERT',
            payload:"fff",

        });*/

        this.props.ActionInsert('default1');
    }

    deleteBlock = (id) => {
        this.props.ActionDelete(id);
    }

    // Для обьявления принимаемых свойств и их типов
    static propTypes = {
        data:  PropTypes.objectOf ( PropTypes.string )
    };

    static defaultProps = {
        data:{}
    };
}



//Указывает с какими данными работатет компонент
//из состояния в свойства
function mapStateToProps(state) {
    //возвращает из хранилища
    return {
        data:state.data, // из хранилища store
        update:state.update
    };
}

//Из функции-действия приводим к свойствам
//т.е. свойство поменялось и должен сработать render
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionInsert:ActionInsert,
        ActionSelect:ActionSelect,
        ActionDelete:ActionDelete
    },dispatch);
}


//выводим CarsList с данними из хранилища через mapStateToProps
export  default connect(mapStateToProps,matchDispatchToProps)(Blocks);
