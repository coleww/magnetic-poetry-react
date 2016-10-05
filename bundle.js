require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-magnetic-poetry":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var MagneticPoetry = (function (_React$Component) {
  _inherits(MagneticPoetry, _React$Component);

  function MagneticPoetry() {
    _classCallCheck(this, MagneticPoetry);

    _get(Object.getPrototypeOf(MagneticPoetry.prototype), 'constructor', this).call(this);
    this.state = {
      output: ''
    };
  }

  _createClass(MagneticPoetry, [{
    key: 'handleClick',
    value: function handleClick(word, i) {
      var newOutput = (this.state.output + ' ' + word).trim();
      this.setState({ output: newOutput });
      this.props.onChange(newOutput);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return React.createElement(
        'div',
        { className: 'magnetic-poetry-container' },
        React.createElement(
          'div',
          { className: 'magnetic-poetry-options' },
          this.props.words.map(function (word, i) {
            return React.createElement(
              'div',
              { className: 'magnetic-poetry-word', key: i, onClick: _this.handleClick.bind(_this, word, i) },
              word
            );
          })
        ),
        React.createElement(
          'div',
          { className: 'magnetic-poetry-output' },
          this.state.output
        )
      );
    }
  }]);

  return MagneticPoetry;
})(React.Component);

;

MagneticPoetry.propTypes = {
  onChange: React.PropTypes['function'],
  words: React.PropTypes.array
};

exports['default'] = MagneticPoetry;
module.exports = exports['default'];

},{"react":undefined}]},{},[]);
