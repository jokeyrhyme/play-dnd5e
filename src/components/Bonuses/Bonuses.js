import React, { PropTypes } from 'react'
import classnames from 'classnames'

import FlexColumn from '../FlexColumn/FlexColumn.js'
import Bonus from '../Bonus/Bonus.js'
import classes from './Bonuses.css'

export const Bonuses = ({ className }) => (
  <FlexColumn className={classnames(classes.self, className)}>
    <Bonus className={classes.bonus} type='inspiration' />
    <Bonus className={classes.bonus} type='proficiency bonus' />
    <Bonus className={classes.bonus} type='passive perception' />
  </FlexColumn>
)

Bonuses.propTypes = {
  className: PropTypes.string
}

export default Bonuses
