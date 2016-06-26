import React, { PropTypes } from 'react'
import classnames from 'classnames'

import FlexColumn from '../FlexColumn/FlexColumn.js'
import classes from './VitalValue.css'

export const VitalValue = ({ className, type, value }) => (
  <FlexColumn className={classnames(classes.self, className)}>
    <label className={classes.label}>
      {type}
    </label>
    <input className={classes.number} type='number' min={0} defaultValue={value || 10} />
  </FlexColumn>
)

VitalValue.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number
}

export default VitalValue
