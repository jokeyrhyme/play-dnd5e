import React, { PropTypes } from 'react'
import classnames from 'classnames'

import DeathSaves from '../DeathSaves/DeathSaves.js'
import FlexColumn from '../FlexColumn/FlexColumn.js'
import FlexRow from '../FlexRow/FlexRow.js'
import HitDice from '../HitDice/HitDice.js'
import HitPoints from '../HitPoints/HitPoints.js'
import VitalValue from '../VitalValue/VitalValue.js'
import classes from './Vitals.css'

export const Vitals = ({ className }) => (
  <FlexColumn className={classnames(classes.self, className)}>
    <FlexRow className={classes.values}>
      <VitalValue type='armor class' />
      <VitalValue type='initiative' />
      <VitalValue type='speed' />
    </FlexRow>

    <HitPoints type='current' />
    <HitPoints type='temporary' />

    <FlexRow className={classes.dice}>
      <HitDice />
      <DeathSaves />
    </FlexRow>
  </FlexColumn>
)

Vitals.propTypes = {
  className: PropTypes.string
}

export default Vitals
