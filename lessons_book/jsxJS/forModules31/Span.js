import React   from 'react';

class Span extends React.PureComponent{

    constructor(props) {
        super(props);
    }

    render() {
         console.log(`Span renderer #${this.props.numb}`);

        return ( this.props.count );
    }

}
export default Span;