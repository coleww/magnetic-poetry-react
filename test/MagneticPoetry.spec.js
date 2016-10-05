require('testdom')('<html><body></body></html>');
import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import MagneticPoetry from '../src/MagneticPoetry';

function setup(words) {
  const props = {
    words: words,
    onChange: expect.createSpy()
  };

  const enzymeWrapper = mount(<MagneticPoetry {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('MagneticPoetry', () => {
  it('should render a words', () => {
    const { enzymeWrapper } = setup(['wow']);
    expect(enzymeWrapper.find('.magnetic-poetry-word').text()).toBe('wow');
  });

  it('should render a bunch of words', () => {
    const { enzymeWrapper } = setup(['wow', 'cool', 'awesome']);
    expect(enzymeWrapper.find('.magnetic-poetry-word').length).toBe(3);
  });

  it('clicking a word should add it to the output', () => {
    const { enzymeWrapper } = setup(['wow']);
    enzymeWrapper.find('.magnetic-poetry-word').simulate('click');
    expect(enzymeWrapper.find('.magnetic-poetry-output').text()).toBe('wow');
    enzymeWrapper.find('.magnetic-poetry-word').simulate('click');
    expect(enzymeWrapper.find('.magnetic-poetry-output').text()).toBe('wow wow');
  });

  it('should call provided onChange method when output updates', () => {
    const { props, enzymeWrapper } = setup(['wow']);
    enzymeWrapper.find('.magnetic-poetry-word').simulate('click');
    expect(props.onChange.calls.length).toBe(1);
    expect(props.onChange.calls[0].arguments[0]).toEqual('wow');
  });
});
