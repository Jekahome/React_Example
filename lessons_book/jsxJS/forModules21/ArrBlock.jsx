import React from 'react';
import Block from './Block';
import PropTypes from 'prop-types';

export default class ArrBlock extends React.Component {
    constructor(props) {
        super(props);

        //this.render=this.render.bind(this);

        var Data = window.localStorage.getItem('data');
        if(!Data)Data={};
        else Data = JSON.parse(Data);

        this.state =  {
            data:Data
        };

        //this.deleteBlock = this.deleteBlock.bind(this);
        //this.insertBlock = this.insertBlock.bind(this);
    }
    componentWillMount() {
        //this.setState({total: this.state.qty * this.props.price});
    }

    render = (e) =>{
        var This = this;
        return ( <div> {
            Object.keys(this.state.data).map( function (key){
                return <Block key={key} id={key} text={this.state.data[key]}  deleteBlock={This.deleteBlock} />

            }.bind(This))
        }
            <button onClick={This.insertBlock} className="plus">{' + '}</button>
        </div>);

    }

    insertBlock = (e) =>{
        var Data = window.localStorage.getItem('data');
        if(!Data){
            Data={"0":"default"};
        }
        else {
            Data = JSON.parse(Data);
            //найти слудующтй ключ //Data.push('default');

            var max=0;
            Object.keys(Data).map(function (key ) {
                max=parseInt(key)>max?parseInt(key):max;
            } );
            Data[max+1]="default";
        }


        window.localStorage.setItem("data",JSON.stringify(Data));

        this.setState({
            data:Data
        });
        console.log('insertBlock');
    }


    deleteBlock = (e) => {
        var Data = window.localStorage.getItem('data');
        if(!Data)Data={};
        else Data = JSON.parse(Data);

        window.localStorage.setItem("data",JSON.stringify(Data));

        this.setState({
            data:Data
        });
        console.log('deleteBlock');
    }

    // Для обьявления принимаемых свойств и их типов
    static propTypes = {
        data:  PropTypes.objectOf ( PropTypes.string )
    };

    static defaultProps = {
        data:{}
    };
}

