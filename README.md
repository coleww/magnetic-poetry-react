# magnetic-poetry-react

A simple component for building up a string from a list of word options. 
This isn't ~really~ magnetic-poetry, but naming stuff is hard.


## Demo & Examples

Live demo: [coleww.github.io/react-magnetic-poetry](http://coleww.github.io/react-magnetic-poetry/)

## usage

this component should be passed an array of words to be used as options for the poem, 
as well as an onChange function that will be called with the current poem whenever the user selects a word.


```
  var MagneticPoetry = require('react-magnetic-poetry');

  // inside your `render` function
  <MagneticPoetry words={['wow', 'cool', 'such', 'poem', 'yes', 'nice']} onChange={console.log}/>
```

# Styling

This component does not come with css included, though some basic styling is included in the [example](https://github.com/coleww/magnetic-poetry-react/blob/master/example/src/example.less#L6-L27)


The structure of the component looks like:

- .magnetic-poetry-container
  - .magnetic-poetry-options
    - .magnetic-poetry-words
  - .magnetic-poetry-output