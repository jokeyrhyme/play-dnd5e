import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Field from '../Field/Field.js'
import SignedNumber from '../SignedNumber/SignedNumber.js'
import classes from './Ability.css'

export const Ability = ({ className, field, modifier }) => (
  <Field className={classnames(classes.self, className)} label={field.name}>
    <input className={classes.value} type='number' min={8} {...field} />
    <SignedNumber className={classes.modifier} value={modifier} />
  </Field>
)

Ability.propTypes = {
  className: PropTypes.string,
  field: PropTypes.object.isRequired,
  modifier: PropTypes.number
}

export default Ability
