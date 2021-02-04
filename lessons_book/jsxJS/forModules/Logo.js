// шаблон для каждого компонента

// объявление требований --------------------------
// При объявлении зависимостей от других модулей

// var React = require('react');//old
import React  from 'react'; // ECMAScript 6
import PropTypes from 'prop-types';

//реализация --------------------------

//   old
/*
var Logo = React.createClass({
    render: function() {
        return <div className="Logo" />;
    }
});
*/
class Logo extends React.Component{
    render() {
        return <div className="Logo" />;
    }
}


// Убираем глобальные переменные с помощью экспорта --------------------------
//module.exports = Logo;//old
export default Logo  // ECMAScript 6



