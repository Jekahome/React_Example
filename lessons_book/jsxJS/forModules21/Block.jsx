import React from "react";
import PropTypes from 'prop-types'; // ES6

export default class Block extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text:this.props.text,
            update:false
        }
    }

    render() {
        if(this.state.update){
            return  (<div>
                <input ref='input' type="text" style={{width:'100px'}} defaultValue={this.state.text}/>
                <button  onClick={this.save} className="save">save</button>
            </div>)
        }else{
            return  (<div>
                <span className="tablo">{this.state.text}</span>
                <button onClick={this.update} className="update">update</button>
                <button onClick={this.delete} className="delete">delete</button>
            </div>)
        }
    }


    update = (e) => {
        this.setState({update:true});
        //console.log(e.target.parentNode.querySelector('.tablo'))
    }


    save = (e) => {

        var Data = JSON.parse( localStorage.getItem('data') );

        //Data[parseInt(this.props.id)]=this.refs.input.value;
        Data[this.props.id]=this.refs.input.value;

        window.localStorage.setItem("data",JSON.stringify(Data));

        this.setState({
            update:false,
            text:this.refs.input.value
        });
    }

    delete = (e) =>{
        var Data = JSON.parse( localStorage.getItem('data') );

        //delete Data[parseInt(this.props.id)] ;
        delete Data[this.props.id];

        window.localStorage.setItem("data",JSON.stringify(Data));

        // this.props.deleteBlock.bind(this.props.bind)();
        this.props.deleteBlock();
    }

    static propTypes = {
        text: PropTypes.string // поле тип строка
    };

    static defaultProps = {
        text:'default'
    };
}