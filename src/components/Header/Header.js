import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>Play D&D 5e</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Sheet
    </IndexLink>
    {' · '}
    <Link to='/choices' activeClassName={classes.activeRoute}>
      Choices
    </Link>
    {' · '}
    <Link to='/effects' activeClassName={classes.activeRoute}>
      Effects
    </Link>
  </div>
)

export default Header
