'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = /**
                    * @function
                   */ function () { /**
                                     * @function
                                     * @param target
                                     * @param props
                                    */ function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return (/**
                                                                                                                                                                                                                                                                                                                                                                            * @function
                                                                                                                                                                                                                                                                                                                                                                            * @param Constructor
                                                                                                                                                                                                                                                                                                                                                                            * @param protoProps
                                                                                                                                                                                                                                                                                                                                                                            * @param staticProps
                                                                                                                                                                                                                                                                                                                                                                           */ function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; } ); }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function
 * @param instance
 * @param Constructor
*/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @function
 * @param self
 * @param call
*/
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

/**
 * @function
 * @param subClass
 * @param superClass
*/
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_temp = _class = /**
                             * @function
                             * @param _Component
                            */function (_Component) {
    _inherits(App, _Component);

    /**
     * @function
    */
    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'getChildContext',
        value: /**
                * @function
               */function getChildContext() {
            return this.props.context;
        }
    }, {
        key: 'render',
        value: /**
                * @function
               */function render() {
            return this.props.children;
        }
    }]);

    return App;
}(_react.Component), _class.propTypes = {
    children: _react.PropTypes.element.isRequired,
    context: _react.PropTypes.shape({
        addCss: _react.PropTypes.func,
        setTitle: _react.PropTypes.func,
        setMeta: _react.PropTypes.func,
        context: _react.PropTypes.object
    })
}, _class.childContextTypes = {
    addCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired,
    context: _react.PropTypes.object.isRequired
}, _temp);
exports.default = App;
//# sourceMappingURL=App.js.map