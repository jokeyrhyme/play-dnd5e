import React, { PropTypes } from 'react'

import FlexColumn from '../FlexColumn/FlexColumn.js'
import FlexRow from '../FlexRow/FlexRow.js'
import classes from './HitPoints.css'

export const HitPoints = ({ max, type, value }) => (
  <FlexColumn className={classes.self}>
    <label className={classes.label}>
      {type} hit points
    </label>
    <input className={classes.value} type='number' min={0} title={`${type} value`} defaultValue={value || 0} />
    {type === 'current' && <FlexRow className={classes.maximum}>
      <label className={classes.maximumLabel}>{`${type} maximum`}</label>
      <input className={classes.maximumValue} type='number' min={0} defaultValue={max || 15} />
    </FlexRow>}
  </FlexColumn>
)

HitPoints.propTypes = {
  max: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.number
}

export default HitPoints
