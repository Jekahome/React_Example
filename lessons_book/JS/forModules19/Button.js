'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// npm install --save prop-types


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES6

// Для компонентов не использующих состояние подходят функции
function Button(props) {

    return props.href ? _react2.default.createElement(
        'a',
        _extends({}, props, { className: props.className }),
        props.value
    ) : _react2.default.createElement('button', _extends({}, props, { className: props.className }));
}

Button.propTypes = {
    href: _propTypes2.default.string
};

Button.defaultProps = {
    value: 'link default'

};

exports.default = Button;