var React = require('react');

var MagneticPoetry = React.createClass({
	render () {
		return <div className="magnetic-poetry-container">magnetic-poetry-react</div>;
	}
});

MagneticPoetry.propTypes = {
  words: React.PropTypes.array
};

export default MagneticPoetry;
