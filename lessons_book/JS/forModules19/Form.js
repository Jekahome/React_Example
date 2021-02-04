'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// npm install --save prop-types


// ES6


var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.getData = function (e) {

            var data = {};
            _this.props.fields.forEach(function (field) {
                return data[field.id] = _this.refs[field.id].getValue();
            });
            return data;
        };

        _this.render = function (e) {
            return _react2.default.createElement(
                'form',
                { className: 'Form' },
                _this.props.fields.map(function (field) {

                    return _react2.default.createElement(
                        'div',
                        { className: 'FormRow', key: field.id },
                        _react2.default.createElement(
                            'label',
                            { className: 'FormLabel', htmlFor: field.id },
                            field.label,
                            ':'
                        ),
                        _react2.default.createElement('input', { id: field.id, type: 'text' })
                    );
                }, _this),
                _react2.default.createElement(
                    'button',
                    { onClick: _this.submit },
                    _this.state.myText
                )
            );
        };

        _this.submit = function (e) {
            console.log('submit');
            //как предотвратить отправку
            //где данные из формы
            //клик или отправка формы

            _this.setState({
                myText: 'submit'
            });
            return false;
        };

        _this.state = { myText: _this.props.myText };

        return _this;
    }

    _createClass(Form, [{
        key: 'getInitialState',


        //Инициализация свойства для состояния
        value: function getInitialState() {
            return {
                myText: 'default'
            };
        }
    }]);

    return Form;
}(_react2.default.Component);

Form.getDefaultProps = {
    myText: "default"
};
Form.propTypes = {
    fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        id: _propTypes2.default.string.isRequired,
        label: _propTypes2.default.string.isRequired,
        type: _propTypes2.default.string,
        options: _propTypes2.default.arrayOf(_propTypes2.default.string)
    })).isRequired,
    initialData: _propTypes2.default.object,
    readonly: _propTypes2.default.bool
};
exports.default = Form;