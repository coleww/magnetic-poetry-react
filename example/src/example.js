var React = require('react');
var ReactDOM = require('react-dom');
var MagneticPoetryReact = require('react-magnetic-poetry');

var App = React.createClass({
	render () {
		return (
			<div>
				<MagneticPoetryReact />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
