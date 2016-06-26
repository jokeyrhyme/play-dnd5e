import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Field from '../Field/Field.js'
import classes from './Ability.css'

export const Ability = ({ className, modifier, type, value }) => (
  <Field className={classnames(classes.self, className)} label={type}>
    <input className={classes.value} type='number' min={0} defaultValue={value || 12} />
    <input className={classes.modifier} type='number' defaultValue={value || 1} />
  </Field>
)

Ability.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.number
}

export default Ability
