import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router';


class User extends  React.Component {

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
          console.log('USER %%%',props);

    }

    render() {
        return this.props.user?
         (
            <div className="home-page"  style={{backgroundColor:"grey"}}>
                <h3>I am User!</h3><Link to={`/29/users/2`}>/29/users/2</Link>
                <ul>
                    <li>id:{this.props.user.id}</li>
                    <li>name:{this.props.user.name}</li>
                    <li>github:{this.props.user.github}</li>
                    <li>twitter:{this.props.user.twitter}</li>
                </ul>
            </div>
        ):(
                <div className="home-page"  style={{backgroundColor:"grey"}}>
                    <h3>I am User!</h3>
                </div>
            );
    }
}

function mapStateToProps(state,ownProps) {
    //возвращает из хранилища
    return {
        user:state.user
    };
}

export default connect(mapStateToProps,null)(User);