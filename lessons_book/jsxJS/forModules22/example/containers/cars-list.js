import React  from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionSelect} from './../actions/select.js';//действие


class CarsList extends React.Component{
    render(){
        return (
          <ol>
              {
                  this.props.cars.map((car) =>{
                      return (//при клике вызываем перерисовку <Details/> через вызов обработчика ActionSelect
                          <li onClick={ () => this.props.ActionSelect(car)} key={car.id}> {car.desc}</li>
                      )
                  })
              }
          </ol>
        );
    }


}

//Указывает с какими данными работатет компонент
//из состояния в свойства
function mapStateToProps(state) {
    //возвращает из хранилища
    return {
        cars:state.cars  // из хранилища allReducers.state
    };
}


//Из функции-действия приводим к свойствам
//т.е. свойство поменялось и должен сработать render
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ActionSelect:ActionSelect},dispatch);
}



//выводим CarsList с данними из хранилища через mapStateToProps
export  default connect(mapStateToProps,matchDispatchToProps)(CarsList);
