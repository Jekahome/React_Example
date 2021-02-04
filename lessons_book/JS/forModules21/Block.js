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

// ES6

var Block = function (_React$Component) {
    _inherits(Block, _React$Component);

    function Block(props) {
        _classCallCheck(this, Block);

        var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

        _this.update = function (e) {
            _this.setState({ update: true });
            //console.log(e.target.parentNode.querySelector('.tablo'))
        };

        _this.save = function (e) {

            var Data = JSON.parse(localStorage.getItem('data'));

            //Data[parseInt(this.props.id)]=this.refs.input.value;
            Data[_this.props.id] = _this.refs.input.value;

            window.localStorage.setItem("data", JSON.stringify(Data));

            _this.setState({
                update: false,
                text: _this.refs.input.value
            });
        };

        _this.delete = function (e) {
            var Data = JSON.parse(localStorage.getItem('data'));

            //delete Data[parseInt(this.props.id)] ;
            delete Data[_this.props.id];

            window.localStorage.setItem("data", JSON.stringify(Data));

            // this.props.deleteBlock.bind(this.props.bind)();
            _this.props.deleteBlock();
        };

        _this.state = {
            text: _this.props.text,
            update: false
        };
        return _this;
    }

    _createClass(Block, [{
        key: 'render',
        value: function render() {
            if (this.state.update) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('input', { ref: 'input', type: 'text', style: { width: '100px' }, defaultValue: this.state.text }),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.save, className: 'save' },
                        'save'
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'tablo' },
                        this.state.text
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.update, className: 'update' },
                        'update'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.delete, className: 'delete' },
                        'delete'
                    )
                );
            }
        }
    }]);

    return Block;
}(_react2.default.Component);

Block.propTypes = {
    text: _propTypes2.default.string // поле тип строка
};
Block.defaultProps = {
    text: 'default'
};
exports.default = Block;