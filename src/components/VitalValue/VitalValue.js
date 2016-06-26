import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Field from '../Field/Field.js'
import classes from './VitalValue.css'

export const VitalValue = ({ className, type, value }) => (
  <Field className={classnames(classes.self, className)} label={type} labelBelow>
    <input className={classes.number} type='number' min={0} defaultValue={value || 10} />
  </Field>
)

VitalValue.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number
}

export default VitalValue
