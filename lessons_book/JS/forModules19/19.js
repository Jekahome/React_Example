'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Excel = require('./Excel');

var _Excel2 = _interopRequireDefault(_Excel);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _BlockH = require('./BlockH1');

var _BlockH2 = _interopRequireDefault(_BlockH);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if (!headers) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        _BlockH2.default,
        null,
        ' Welcome to The App! '
    ),
    _react2.default.createElement(_Excel2.default, { initialData: data, headers: headers }),
    _react2.default.createElement(_Button2.default, { className: 'classButton', href: 'http://react.loc/19', value: 'link' }),
    _react2.default.createElement(_Form2.default, {
        myText: 'button',
        fields: [{ label: 'Rating', type: 'rating', id: 'rateme' }, { label: 'Greetings', id: 'freetext' }],
        initialData: { rateme: 4, freetext: 'Hello' } })
), app);