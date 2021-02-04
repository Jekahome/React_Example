import React from 'react';
// npm install --save prop-types
import PropTypes from 'prop-types'; // ES6

export default class BlockH1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>h1:{this.props.children}</h1>
    }
}

//export default BlockH1;

