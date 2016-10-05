require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import MagneticPoetry from '../src/MagneticPoetry'

function setup() {
  const props = {
    words: []
  }

  const enzymeWrapper = mount(<MagneticPoetry {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('MagneticPoetry', () => {
  it('should render', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.magnetic-poetry-container').text()).toBe('FAIL!');

  })
})
