import React from 'react';
import {connect} from "react-redux";

class Posts extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
             return (<div>
                  {this.props.posts.map( (post) => {
                      return <p >
                               <h4>{post.title}</h4>
                                <p>
                                    {post.text}
                                </p>
                                <span style={{backgroundColor:post.favoriteColor }}>{post.firstName + " " + post.lastName+" "+ post.email}</span>
                             </p>
                  })  }
              </div>)
    }
    /*
     title : " Текст заголовка ",
    text : " Текст статьи ",
    firstName:"empty",
    lastName:"empty",
    email:"empty",
    sex:true,
    favoriteColor:"00ff00",
    employed:true,
    notes:"textarea"
     */
}


function mapStateToProps(state,ownProps) {

    return {
        posts: state.info.posts
    };
}

export default connect(mapStateToProps,null)(Posts);