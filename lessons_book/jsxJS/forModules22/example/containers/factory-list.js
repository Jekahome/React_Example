import React  from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class FactoriesList extends React.Component{
    render(){
        return (
            <ol>
                {this.showList()}
            </ol>
        );
    }

    showList(){
        return this.props.factories.map((factory) =>{
            return (
                <li key={factory.id}> <img src={factory.img}/> {factory.name}</li>
            )
        })
    }

    /*getImg(car){
        let img;
        for(let i=0; i< this.props.factories.length; i++){
            if(this.props.factories[i].name == car.name){
                img = this.props.factories[i].src;break;
            }
        }
        return img;
    }*/
}

function mapStateToProps(state) {
    //возвращает из хранилища
    return {
        factories:state.factories // из хранилища allReducers.state
    };
}

//выводим CarsList с данними из хранилища через mapStateToProps
export  default connect(mapStateToProps)(FactoriesList);