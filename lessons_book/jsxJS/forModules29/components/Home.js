import React from 'react';

 class Home extends  React.Component {

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
         console.log('Home',props.params['testId']);
     }

     render() {
        return (
            <div className="home-page"  style={{backgroundColor:"grey"}}>
                <h3>I am Home id:{this.props.routeParams['testId']}</h3>
            </div>
        );
    }
}

export default Home;