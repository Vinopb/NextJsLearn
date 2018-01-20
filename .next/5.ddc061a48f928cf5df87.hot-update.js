webpackHotUpdate(5,{

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/vinodpc/projects/NextJs/bitprices/components/Prices.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vinodpc/projects/NextJs/bitprices/components/Prices.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kZGMwNjFhNDhmOTI4Y2Y1ZGY4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmljZXMuanM/YWI4MzUxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgc3RhdGUgPXtcbiAgICAgICAgY3VycmVuY3kgOidFVVInXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCBsaXN0ID0nJztcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ1VTRCcpe1xuICAgICAgICAgICAgbGlzdCA9ICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX08L3NwYW4+XG4gICAgICAgICAgICA8c3Ryb25nPiB7dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9IDwvc3Ryb25nPlxuICAgICAgICAgICAgIDwvbGk+ICAgXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdHQlAnKXtcbiAgICAgICAgICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuR0JQLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuR0JQLmNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz4ge3RoaXMucHJvcHMuYnBpLkdCUC5yYXRlfSA8L3N0cm9uZz5cbiAgICAgICAgICAgICA8L2xpPiAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdFVVInKXtcbiAgICAgICAgICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuRVVSLmNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz4ge3RoaXMucHJvcHMuYnBpLkVVUi5yYXRlfSA8L3N0cm9uZz5cbiAgICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAge2xpc3R9ICAgICAgICAgXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2UgPXsgZT0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbmN5OmUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICBjbGFzc05hbWUgPVwiZm9ybS1jb250cm9sXCIgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9XCJVU0RcIj5VU0Q8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPVwiR0JQXCI+R0JQPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlID1cIkVVUlwiPkVVUjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1ByaWNlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUF4Q0E7QUFDQTtBQTBDQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9