import React, { PropTypes } from 'react'

import FlexColumn from '../FlexColumn/FlexColumn.js'
import FlexRow from '../FlexRow/FlexRow.js'
import classes from './HitDice.css'

export const HitDice = ({ max, value }) => (
  <FlexColumn className={classes.self}>
    <label className={classes.label}>
      hit dice
    </label>
    <input className={classes.value} type='text' min={0} defaultValue={value || '1D6'} />
    <FlexRow className={classes.maximum}>
      <label className={classes.maximumLabel}>total</label>
      <input className={classes.maximumValue} type='text' min={0} defaultValue={max || '1D6'} />
    </FlexRow>
  </FlexColumn>
)

HitDice.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number
}

export default HitDice
