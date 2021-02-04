import React  from 'react';
import PropTypes from 'prop-types';
import {createSelector} from 'reselect'
import {connect} from "react-redux";

import Ul from './Ul'
import Span from './Span'
import store from "./store";


// React.PureComponent -  не перерисовывает компонент если свойство передаваемое в него не изменилось
// shouldComponentUpdate - отменяет перерисовку компонента по нашим условиям


//первые ф-ции достающие ключи на них поступит state
//последняя кешируется основываясь на результатах первых ф-ций если одна из первых ф-ций измент результат
// произойдет перерасчет последней ф-цией а пока берется результат из кеша
//Т.е. первые ф-ции это значение для расчета если входные данные меняются то и кеш пересчитывается
const itemsSelector = createSelector(
    ({counter1}) => counter1,// достали из state counter1 и вернули
    ({counter2}) => counter2,// достали из state counter2 и вернули
    (counter1,counter2) => {// сюда поступят результаты вычислений первых ф-ций
            let arr = new Array();
            for(let i=0;i<(counter1+counter2);i++){
                arr.push(i);
            }
            return arr;
          }
);

/*
 При изменении состояния от которого зависит компонент он прерисовывается
 Если не запретить в shouldComponentUpdate
 */
class App extends React.Component{
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(newProps,newState){
        // если меняем свойство не влияющее на перерисовку
        if(this.props.counter4 != newProps.counter4) {
            return false;// не перерисовывать но свойство менять
        }
        return true;
    }

    // store.dispatch (активация actions ) вызываем редьюсер

    render() {
        console.log('App renderer ');
        // с кешем
        const items = itemsSelector(this.props);
       // без кеша (будет перерисованно не зависящие от измененных свойств состояния Ul)
        //const items = this.getItems();

        return (<div>
            counter1 : <Span count={this.props.counter1} numb={1}/> <br/>
            counter2 : <Span count={this.props.counter2} numb={2}/> <br/>
            counter3 : <Span count={this.props.counter3} numb={3}/> <br/>


            <button onClick={
                () =>{  store.dispatch({
                type: 'one', payload:1 }) }
            }>counter1++</button>


            <button onClick={
                () =>{  store.dispatch({
                    type: 'two', payload:1 }) }
            }>counter2++</button>

            <button onClick={
                () =>{  store.dispatch({
                    type: 'three', payload:1 }) }
            }>counter3++</button>

            <button onClick={
                () =>{  store.dispatch({
                    type: 'four', payload:1 }) }
            }>counter4++</button>

        <Ul items={items}/>

        </div>);
    }

    getItems(){
         let arr = new Array();
          for(let i=0;i<(this.state.counter1+this.state.counter2);i++){
              arr.push(i);
          }
        return arr;
    }
}

App.propTypes ={
    counter1:  PropTypes.number.isRequired,
    counter2:  PropTypes.number.isRequired,
    counter3:  PropTypes.number.isRequired,
    counter4:  PropTypes.number.isRequired
};

function mapStateToProps(state,ownProps) {
    return {
        counter1:  state.counter1,
        counter2:  state.counter2,
        counter3:  state.counter3,
        counter4:  state.counter4
    };
}

export default connect(mapStateToProps,null)(App);
