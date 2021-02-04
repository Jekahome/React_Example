'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // шаблон для каждого компонента

// объявление требований --------------------------

// npm install --save prop-types
// При объявлении зависимостей от других модулей
// ECMAScript 6


// ES6
//var PropTypes = require('prop-types'); // ES5 with npm


//реализация --------------------------
var Excel = function (_React$Component) {
    _inherits(Excel, _React$Component);

    function Excel(props) {
        _classCallCheck(this, Excel);

        var _this = _possibleConstructorReturn(this, (Excel.__proto__ || Object.getPrototypeOf(Excel)).call(this, props));

        _this.render = function (e) {

            return _react2.default.createElement(
                'table',
                { className: 'Excel', id: '7' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _this.state.initialData.map(function (row, idx_) {
                        return _react2.default.createElement(
                            'tr',
                            { key: idx_ },
                            this.props.headers.map(function (title, idx) {
                                return _react2.default.createElement(
                                    'th',
                                    { key: idx },
                                    title
                                );
                            }.bind(this))
                        );
                    }.bind(_this))
                ),
                _react2.default.createElement(
                    'tbody',
                    { onClick: _this.click, ref: 'refBody' },
                    _this.state.initialData.map(function (row, idx_) {
                        return _react2.default.createElement(
                            'tr',
                            { key: idx_ },
                            row.map(function (cell, _idx) {
                                return _react2.default.createElement(
                                    'td',
                                    { key: _idx },
                                    cell
                                );
                            })
                        );
                    })
                )
            );
        };

        _this.click = function (e) {
            console.log(_this.refs.refBody); // Uncaught TypeError: Cannot read property 'refs' of undefined
        };

        _this.state = { initialData: _this.props.initialData };
        // this.render = this.render.bind(this);
        return _this;
    }

    return Excel;
}(_react2.default.Component);

Excel.propTypes = {
    headers: _propTypes2.default.arrayOf(_propTypes2.default.string),
    initialData: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string))
};
exports.default = Excel;