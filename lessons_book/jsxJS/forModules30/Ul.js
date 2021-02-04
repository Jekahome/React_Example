import React   from 'react';

class Ul extends React.PureComponent{

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Ul renderer');

        return (<ul>
                    {
                        this.props.items.map((item,i) =>(
                            <li key={i} >{i}</li>
                        ))
                    }
                </ul>);
    }

}
export default Ul;