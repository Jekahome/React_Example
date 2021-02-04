import React  from 'react';
import {connect} from 'react-redux';

// Отображение Details зависит от того что вернет state.carActive от car-active.js (объект машины)
// который зависит от состояния action.type

class Details extends React.Component {

    render(){
        if(!this.props.car){
            return (<p>Выберите автомобиль...</p>)
        }


        return (
            <div>
                <h2>{this.props.car.name}</h2>
                <img className='bigImg' src={this.props.car.img}/>
                <p>{this.props.car.desc}</p>
                <p>Cкорость:{this.props.car.speed}</p>
                <p>Вес:{this.props.car.weight}</p>
            </div>
        )
    }
}

//из состояния в свойства
function mapStateToProps(state) {
    //возвращает из хранилища
    return {
        car:state.activeCar // из хранилища allReducers.state ActiveCar car-active
    };
}

export default connect(mapStateToProps)(Details)