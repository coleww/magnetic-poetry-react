var React = require('react');

class MagneticPoetry extends React.Component {
  constructor () {
    super();
    this.state = {
      output: ''
    };
  }
  handleClick (word, i) {
    const newOutput = `${this.state.output} ${word}`.trim();
    this.setState({output: newOutput});
    this.props.onChange(newOutput);
  }
	render () {
		return (<div className="magnetic-poetry-container">
      <div className="magnetic-poetry-options">
        {this.props.words.map((word, i) => {
          return (
            <div className="magnetic-poetry-word" key={i} onClick={this.handleClick.bind(this, word, i)}>
              {word}
            </div>
          );
        })}
      </div>
      <div className="magnetic-poetry-output">
        {this.state.output}
      </div>
    </div>);
	}
};

MagneticPoetry.propTypes = {
  onChange: React.PropTypes.function,
  words: React.PropTypes.array
};

export default MagneticPoetry;
