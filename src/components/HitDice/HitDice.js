import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Field from '../Field/Field.js'
import FlexRow from '../FlexRow/FlexRow.js'
import classes from './HitDice.css'

const FIELD_PROPS = {
  label: 'hit dice',
  labelBelow: true
}

export const HitDice = ({ className, max, value }) => (
  <Field className={classnames(classes.self, className)} {...FIELD_PROPS}>
    <input className={classes.value} type='text' min={0} defaultValue={value || '1D6'} />
    <FlexRow className={classes.maximum}>
      <label className={classes.maximumLabel}>total</label>
      <input className={classes.maximumValue} type='text' min={0} defaultValue={max || '1D6'} />
    </FlexRow>
  </Field>
)

HitDice.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  value: PropTypes.number
}

export default HitDice
