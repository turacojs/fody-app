'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let App = (_temp = _class = class App extends _react.Component {

    getChildContext() {
        return this.props.context;
    }

    render() {
        return this.props.children;
    }
}, _class.propTypes = {
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