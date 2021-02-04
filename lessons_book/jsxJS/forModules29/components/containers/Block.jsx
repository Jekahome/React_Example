import React from "react";
import PropTypes from 'prop-types'; // ES6
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ActionUpdate} from "../../actions/update.js";
import store from '../../store';
import * as types from "../../actions/types";
import {selectStore} from "../../api/data";
import {SAVE} from '../../actions/types';


 class Block extends React.Component {
     constructor(props) {
        super(props);

         /*this.state = {
             update:false
         }*/
    }

    render() {
        if(this.props.update){
            return  (<div>
                <input ref='input' type="text" style={{width:'100px',backgroundColor:'blue'}} defaultValue={this.props.text}/>
                <button  onClick={this.save} className="save">save</button>
            </div>)
        }else{
            return  (<div>
                <span className="tablo">{this.props.text}</span>
                <button onClick={this.update} className="update">update</button>
                <button onClick={this.delete} className="delete">delete</button>
            </div>)
        }
    }


    update = (e) => {


        this.props.ActionUpdate(this.props.id);

        //console.log(e.target.parentNode.querySelector('.tablo'))
    }


    save = (e) => {

        // обновим store
        store.dispatch({
            type:types.SAVE,
            payload:this.refs.input.value,
            id:this.props.id
        });


    }

    delete = (e) =>{

        this.props.deleteBlock(this.props.id);
    }

     static propTypes = {
        text: PropTypes.string // поле тип строка
    };

    /*static defaultProps = {
        text:'default',
        update:false
    };*/
}



export default connect(
    /*(state)=>{
        return {
            update:state.update,
        };
    }*/null,
    (dispatch) => bindActionCreators({ActionUpdate:ActionUpdate},dispatch)
)(Block)







