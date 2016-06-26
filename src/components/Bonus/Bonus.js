import React, { PropTypes } from 'react'
import classnames from 'classnames'

import FlexRow from '../FlexRow/FlexRow.js'
import classes from './Bonus.css'

export const Bonus = ({ className, type, value }) => (
  <FlexRow className={classnames(classes.self, className)}>
    <label className={classes.label}>
      {type}
    </label>
    <input className={classes.value} type='number' min={0} defaultValue={value || 12} />
  </FlexRow>
)

Bonus.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number
}

export default Bonus
