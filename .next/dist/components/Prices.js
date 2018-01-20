'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vinodpc/projects/NextJs/bitprices/components/Prices.js';


var Prices = function (_React$Component) {
    (0, _inherits3.default)(Prices, _React$Component);

    function Prices() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Prices);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currency: 'EUR'
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Prices, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var list = '';
            if (this.state.currency === 'USD') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                }, 'Bitcoin rate for ', this.props.bpi.USD.description, ':', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }, this.props.bpi.USD.code), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }, ' ', this.props.bpi.USD.rate, ' '));
            } else if (this.state.currency === 'GBP') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }, 'Bitcoin rate for ', this.props.bpi.GBP.description, ':', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }, this.props.bpi.GBP.code), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }, ' ', this.props.bpi.GBP.rate, ' '));
            } else if (this.state.currency === 'EUR') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }, 'Bitcoin rate for ', this.props.bpi.EUR.description, ':', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, this.props.bpi.EUR.code), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, ' ', this.props.bpi.EUR.rate, ' '));
            }
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('ul', { className: 'list-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, list), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement('select', { onChange: function onChange(e) {
                    return _this2.setState({ currency: e.target.value });
                },
                className: 'form-control', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('option', { value: 'USD', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'USD'), _react2.default.createElement('option', { value: 'GBP', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'GBP'), _react2.default.createElement('option', { value: 'EUR', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'EUR')));
        }
    }]);

    return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm5hbWVzIjpbIlByaWNlcyIsInN0YXRlIiwiY3VycmVuY3kiLCJsaXN0IiwicHJvcHMiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTSxBOzs7Ozs7Ozs7Ozs7OztnTixBQUNGO3NCQUFPLEEsQUFDTztBQURQLEFBQ0g7Ozs7O2lDQUdJO3lCQUNKOztnQkFBSSxPQUFKLEFBQVUsQUFDVjtnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMkIsT0FBTSxBQUM3Qjt1Q0FBUSxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBO0FBQUE7aUJBQUEsRUFDVSwwQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFEekIsQUFDNkIsYUFDcEMscUJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7a0NBQWhCO29DQUFBLEFBQXVDO0FBQXZDO3dCQUF1QyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFGL0MsQUFFUCxBQUEwRCxBQUMzRCx1QkFBQSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBQVUsVUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBekIsQUFBNkIsTUFIN0IsQUFBUSxBQUdSLEFBRUg7QUFORCx1QkFNUyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMkIsT0FBTSxBQUNuQzt1Q0FBUSxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBO0FBQUE7aUJBQUEsRUFDVSwwQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFEekIsQUFDNkIsYUFDcEMscUJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7a0NBQWhCO29DQUFBLEFBQXVDO0FBQXZDO3dCQUF1QyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFGL0MsQUFFUCxBQUEwRCxBQUMzRCx1QkFBQSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBQVUsVUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBekIsQUFBNkIsTUFIN0IsQUFBUSxBQUdSLEFBRUg7QUFOSyxhQUFBLE1BT0QsSUFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMkIsT0FBTSxBQUNsQzt1Q0FBUSxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBO0FBQUE7aUJBQUEsRUFDVSwwQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFEekIsQUFDNkIsYUFDcEMscUJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7a0NBQWhCO29DQUFBLEFBQXVDO0FBQXZDO3dCQUF1QyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFGL0MsQUFFUCxBQUEwRCxBQUMzRCx1QkFBQSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBQVUsVUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBekIsQUFBNkIsTUFIN0IsQUFBUSxBQUdSLEFBRUg7QUFDRDttQ0FBTyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNIO0FBREc7QUFBQSxhQUFBLGtCQUNILGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDUTtBQURSO2VBREcsQUFDSCxBQUdBOzs4QkFBQTtnQ0FKRyxBQUlILEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUEsWUFBUSxVQUFZLHFCQUFBOzJCQUFJLE9BQUEsQUFBSyxTQUFTLEVBQUMsVUFBUyxFQUFBLEFBQUUsT0FBOUIsQUFBSSxBQUFjLEFBQW1CO0FBQXpELEFBQ0E7MkJBREEsQUFDVzs4QkFEWDtnQ0FBQSxBQUVBO0FBRkE7K0JBRUEsY0FBQSxZQUFRLE9BQVIsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBRkEsQUFFQSxBQUNBLHdCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQUhBLEFBR0EsQUFDQSx3QkFBQSxjQUFBLFlBQVEsT0FBUixBQUFlOzhCQUFmO2dDQUFBO0FBQUE7ZUFUSixBQUFPLEFBS0gsQUFJQSxBQUlQOzs7OztFQXhDZ0IsZ0JBQU0sQSxBQTJDM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUHJpY2VzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpbm9kcGMvcHJvamVjdHMvTmV4dEpzL2JpdHByaWNlcyJ9