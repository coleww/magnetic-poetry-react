var React = require('react');
var ReactDOM = require('react-dom');
var MagneticPoetryReact = require('react-magnetic-poetry');

var App = React.createClass({
	render () {
		return (
			<div>
				<MagneticPoetryReact words={['wow', 'cool', 'such', 'poem', 'yes', 'nice']} onChange={console.log}/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
