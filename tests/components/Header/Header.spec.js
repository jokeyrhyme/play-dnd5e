import React from 'react'
import { Header } from 'components/Header/Header'
import classes from 'components/Header/Header.scss'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header/>)
  })

  it('Renders a welcome message', () => {
    const welcome = _wrapper.find('h1')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Play D&D 5e/)
  })

  describe('Navigation links...', () => {

    it('Should render a Link to Sheet route', () => {
      expect(_wrapper.contains(
        <IndexLink activeClassName={classes.activeRoute} to='/'>
          Sheet
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to Choices route', () => {
      expect(_wrapper.contains(
        <Link activeClassName={classes.activeRoute} to='/choices'>
          Choices
        </Link>
      )).to.be.true
    })

    it('Should render a Link to Effects route', () => {
      expect(_wrapper.contains(
        <Link activeClassName={classes.activeRoute} to='/effects'>
          Effects
        </Link>
      )).to.be.true
    })
  })
})
