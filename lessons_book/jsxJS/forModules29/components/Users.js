import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router';
import { NavLink } from "react-router-dom";
import store from '../store';
import {GET_USERS,GET_USER} from '../actions/types';
import User from './User';




class Users extends  React.Component {

    constructor(props) {
        super(props);
        /*
        children:null
        location:{pathname: "/29/home/888", search: "", hash: "", state: undefined, action: "PUSH", …}
        params:testId:"888"
       route:{path: "/29/home/:testId", component: ƒ}
       routeParams:{testId: "888"}
       router:{getCurrentLocation: ƒ, listenBefore: ƒ, listen: ƒ, transitionTo: ƒ, push: ƒ, …}
       routes:Array(2)
       0:{exact: true, component: ƒ, childRoutes: Array(4)}
       1:{path: "/29/home/:testId", component: ƒ}
         */

    }

    render() {

       console.log('Users @@@',this.props.params,this.props.children?"1":"0");

       // нужно обновить store.user иначе не будет рендерится User
        if(this.props.children){
            store.dispatch({
                type: GET_USER ,
                payload:this.props.params.userId});
        }

        return this.props.children ?
            (<User/>) :
            (
                <div className="home-page"  style={{backgroundColor:"grey"}}>
                    <h3>I am Users!</h3>
                    <button onClick={this.show}>show</button>
                    {Object.keys(this.props.users).map((item, i) => (
                       <p>
                           <ul>
                               <li>id:{this.props.users[item].id}</li>
                               <li>name:<Link to={`/29/users/${this.props.users[item].id}`}>{this.props.users[item].name}</Link></li>
                               <li>github:{this.props.users[item].github}</li>
                               <li>twitter:{this.props.users[item].twitter}</li>
                           </ul>
                       </p>
                    ))}
                </div>
            );
        //  <li>name:<Link to={`/29/users/${this.props.users[item].id}`}>{this.props.users[item].name}</Link></li>

    }

    componentDidMount(){
        //при загрузке компонента отработате componentDidMount
        // this.show();
    }

    show = ()  => {
        const getUsers = function() {
            return { type: GET_USERS ,payload:null}
        };
        store.dispatch(getUsers());
    }

}

function mapStateToProps(state,ownProps) {
    //возвращает из хранилища
    return {
        users:state.users
    };
}

export default connect(mapStateToProps,null)(Users);
