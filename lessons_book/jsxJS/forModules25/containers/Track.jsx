import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {asynTracks} from "../actions/asynTracks";

class Track extends React.Component {
    render = (e) =>{

        let This = this;
        return (<div>
                    <button onClick={this.props.asynTracks} >{'Get asynchronous track'}</button>
                    <ul> {
                        Object.keys(this.props.track).map( function (key,index){
                                return <li key={key}>{"id:"+This.props.track[key].id+" name:"+This.props.track[key].name }  </li>
                            }
                        )
                    }</ul>
                </div>
              )
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
//выводим CarsList с данними из хранилища через mapStateToProps
export  default connect(mapStateToProps,matchDispatchToProps)(Track);
