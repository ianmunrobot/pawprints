import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))

import Footer from './Footer'

describe('<Footer/>', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Footer />)
  )

   it('shows a social network image', () => {
   	let social = root.find('.socials');
    expect(social).to.be.ok
  })
})