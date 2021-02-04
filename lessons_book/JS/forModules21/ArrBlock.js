'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Block = require('./Block');

var _Block2 = _interopRequireDefault(_Block);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrBlock = function (_React$Component) {
    _inherits(ArrBlock, _React$Component);

    function ArrBlock(props) {
        _classCallCheck(this, ArrBlock);

        //this.render=this.render.bind(this);

        var _this = _possibleConstructorReturn(this, (ArrBlock.__proto__ || Object.getPrototypeOf(ArrBlock)).call(this, props));

        _initialiseProps.call(_this);

        var Data = window.localStorage.getItem('data');
        if (!Data) Data = {};else Data = JSON.parse(Data);

        _this.state = {
            data: Data
        };

        //this.deleteBlock = this.deleteBlock.bind(this);
        //this.insertBlock = this.insertBlock.bind(this);
        return _this;
    }

    _createClass(ArrBlock, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            //this.setState({total: this.state.qty * this.props.price});
        }

        // Для обьявления принимаемых свойств и их типов

    }]);

    return ArrBlock;
}(_react2.default.Component);

ArrBlock.propTypes = {
    data: _propTypes2.default.objectOf(_propTypes2.default.string)
};
ArrBlock.defaultProps = {
    data: {}
};

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.render = function (e) {
        var This = _this2;
        return _react2.default.createElement(
            'div',
            null,
            ' ',
            Object.keys(_this2.state.data).map(function (key) {
                return _react2.default.createElement(_Block2.default, { key: key, id: key, text: this.state.data[key], deleteBlock: This.deleteBlock });
            }.bind(This)),
            _react2.default.createElement(
                'button',
                { onClick: This.insertBlock, className: 'plus' },
                ' + '
            )
        );
    };

    this.insertBlock = function (e) {
        var Data = window.localStorage.getItem('data');
        if (!Data) {
            Data = { "0": "default" };
        } else {
            Data = JSON.parse(Data);
            //найти слудующтй ключ //Data.push('default');

            var max = 0;
            Object.keys(Data).map(function (key) {
                max = parseInt(key) > max ? parseInt(key) : max;
            });
            Data[max + 1] = "default";
        }

        window.localStorage.setItem("data", JSON.stringify(Data));

        _this2.setState({
            data: Data
        });
        console.log('insertBlock');
    };

    this.deleteBlock = function (e) {
        var Data = window.localStorage.getItem('data');
        if (!Data) Data = {};else Data = JSON.parse(Data);

        window.localStorage.setItem("data", JSON.stringify(Data));

        _this2.setState({
            data: Data
        });
        console.log('deleteBlock');
    };
};

exports.default = ArrBlock;