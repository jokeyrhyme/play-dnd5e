import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Field from '../Field/Field.js'
import FlexRow from '../FlexRow/FlexRow.js'
import classes from './HitPoints.css'

const SELF_PROPS = {
  containerClass: classes.container,
  labelBelow: true
}

export const HitPoints = ({ className, max, type, value }) => (
  <Field className={classnames(classes.self, className)} label={`${type} hit points`} {...SELF_PROPS}>
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
