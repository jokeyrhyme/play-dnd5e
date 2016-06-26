import React, { PropTypes } from 'react'
import classnames from 'classnames'

import FlexRow from '../FlexRow/FlexRow.js'
import classes from './DeathSavesCount.css'

export const DeathSavesCount = ({ className, type }) => (
  <FlexRow className={classnames(classes.self, className)}>
    <label className={classes.label}>{type}</label>
    <input className={classes.roll} type='checkbox' />
    <input className={classes.roll} type='checkbox' />
    <input className={classes.roll} type='checkbox' />
  </FlexRow>
)

DeathSavesCount.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number
}

export default DeathSavesCount
