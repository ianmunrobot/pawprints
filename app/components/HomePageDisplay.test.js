import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))

import Display from './HomePageDisplay'


describe('<Display/>', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Display />)
  )

   it('shows a title network image', () => {
   	let title = root.find('.title');
    expect(title).to.be.ok
  })
})