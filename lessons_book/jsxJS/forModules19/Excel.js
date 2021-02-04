// шаблон для каждого компонента

// объявление требований --------------------------

// npm install --save prop-types
// При объявлении зависимостей от других модулей
import React  from 'react'; // ECMAScript 6


import PropTypes from 'prop-types'; // ES6
//var PropTypes = require('prop-types'); // ES5 with npm



//реализация --------------------------
export default class Excel extends React.Component{


    constructor(props) {
        super(props);
        this.state = {initialData: this.props.initialData};
       // this.render = this.render.bind(this);
    }


    render = (e) => {

        return  <table className='Excel'   id="7">
            <thead>
            {
                this.state.initialData.map(function(row, idx_) {
                    return (
                        <tr key={idx_}>
                            {
                                this.props.headers.map(function (title, idx) {
                                    return <th key={idx}>{title}</th>
                                }.bind(this))
                            }
                        </tr>
                    );
                }.bind(this))
            }
            </thead>
            <tbody onClick={this.click} ref="refBody">
            {
                this.state.initialData.map(function(row, idx_) {
                    return (
                        <tr key={idx_}>
                            {
                                row.map(function(cell, _idx) {
                                    return <td key={_idx}>{cell}</td>
                                })
                            }
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    }

     click  = (e) => {
        console.log(this.refs.refBody );// Uncaught TypeError: Cannot read property 'refs' of undefined
     }



     static propTypes={
        headers:  PropTypes.arrayOf(
            PropTypes.string
        ),
        initialData: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.string
            )
        )
    };
}




