'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _Prices = require('../components/Prices');

var _Prices2 = _interopRequireDefault(_Prices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vinodpc/projects/NextJs/bitprices/pages/index.js?entry';


var index = function index(props) {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Welcome to BitzPrice'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, ' Check current Bitcoin rate'), _react2.default.createElement(_Prices2.default, { bpi: props.bpi, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })));
};

index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt('return', {
            bpi: data.bpi
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));
exports.default = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZldGNoIiwiTGF5b3V0IiwiUHJpY2VzIiwiaW5kZXgiLCJwcm9wcyIsImJwaSIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDt5QkFDUCxBQUFDOztnQkFBRDtrQkFBQSxBQUNDO0FBREQ7QUFBQSxHQUFBLGtCQUNDLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0k7QUFESjtBQUFBLHFCQUNJLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURKLEFBQ0ksQUFDQSx5Q0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGSixBQUVJLEFBQ0EsZ0RBQUEsQUFBQyxrQ0FBTyxLQUFNLE1BQWQsQUFBb0I7Z0JBQXBCO2tCQUxFLEFBQ1AsQUFDQyxBQUdJO0FBQUE7O0FBTFo7O0FBVUEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtXQUFBO2dFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDRixNQURFLEFBQ0YsQUFBTTs7YUFBbEI7QUFEYyx5QkFBQTswQkFBQTtpQkFFRCxJQUZDLEFBRUQsQUFBSTs7YUFBakI7QUFGYywwQkFBQTs7aUJBS2IsS0FMYSxBQUliLEFBQ0s7QUFETCxBQUNMOzthQUxrQjthQUFBOzBCQUFBOztBQUFBO2NBQUE7QUFBeEIsQUFRQTtrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3Zpbm9kcGMvcHJvamVjdHMvTmV4dEpzL2JpdHByaWNlcyJ9