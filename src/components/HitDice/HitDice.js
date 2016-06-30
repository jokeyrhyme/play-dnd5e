import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { getHitDice } from '../../routes/Choices/modules/choices.js'
import Field from '../Field/Field.js'
import FlexRow from '../FlexRow/FlexRow.js'
import classes from './HitDice.css'

const FIELD_PROPS = {
  label: 'hit dice',
  labelBelow: true
}

export const HitDice = ({ className, hitDice, value }) => (
  <Field className={classnames(classes.self, className)} {...FIELD_PROPS}>
    <input className={classes.value} type='text' min={0} defaultValue={value || hitDice} />
    <FlexRow className={classes.maximum}>
      <label className={classes.maximumLabel}>total</label>
      <span className={classes.maximumValue}>{hitDice || ''}</span>
    </FlexRow>
  </Field>
)

HitDice.propTypes = {
  className: PropTypes.string,
  hitDice: PropTypes.string,
  value: PropTypes.number
}

const mapStateToProps = (state) => ({
  hitDice: getHitDice(state)
})

export default connect(mapStateToProps)(HitDice)
