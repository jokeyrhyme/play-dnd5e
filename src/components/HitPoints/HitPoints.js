import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Field from '../Field/Field.js'
import FlexRow from '../FlexRow/FlexRow.js'
import classes from './HitPoints.css'

export const HitPoints = ({ className, max, type, value }) => (
  <Field className={classnames(classes.self, className)} containerClass={classes.container} label={`${type} hit points`} labelBelow>
    <input className={classes.value} type='number' min={0} title={`${type} value`} defaultValue={value || 0} />
    {type === 'current' && <FlexRow className={classes.maximum}>
      <label className={classes.maximumLabel}>{`${type} maximum`}</label>
      <input className={classes.maximumValue} type='number' min={0} defaultValue={max || 15} />
    </FlexRow>}
  </Field>
)

HitPoints.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.number
}

export default HitPoints
