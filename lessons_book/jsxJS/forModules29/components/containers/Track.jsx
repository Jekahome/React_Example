import React from 'react';
import  ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {asynTracks} from "../../actions/asynTracks";
import TrackInfo from "./TrackInfo.js";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.getElementById('modal-root').appendChild(this.el);
    }

    componentWillUnmount() {
        document.getElementById('modal-root').removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}



class Track extends React.Component {

    constructor(props) {
        super(props);
        this.modal = false;
    }

    render = (e) =>{
        let This = this;
        let context = (
            <div>
                <TrackInfo
                    left = {
                        <span>LEFT</span>
                    }
                    right = {
                        <span>RIGHT</span>
                    } />
                <button onClick={function(){this.modal=!this.modal}.bind(this)}>modal</button>
                <button onClick={this.props.asynTracks} >{'Get asynchronous track'}</button>
                <ul> {
                    Object.keys(this.props.track).map( function (key,index){
                            return <li key={key}>{"id:"+This.props.track[key].id+" name:"+This.props.track[key].name }  </li>
                        }
                    )
                }</ul>
            </div>
        );

        if(!this.modal){
            return context;
        }else{
            return(
                <div>
                    <Modal>
                        {context}
                    </Modal>

                </div>) ;
        }
    }
}

//Указывает с какими данными работатет компонент
//из состояния в свойства
function mapStateToProps(state) {
    //возвращает из хранилища
    return {
        track:state.track // из хранилища store

    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        asynTracks:asynTracks
    },dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(Track)
//выводим CarsList с данними из хранилища через mapStateToProps
