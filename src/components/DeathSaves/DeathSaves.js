import React, { PropTypes } from 'react'
import classnames from 'classnames'

import DeathSavesCount from '../DeathSavesCount/DeathSavesCount.js'
import Field from '../Field/Field.js'
import classes from './DeathSaves.css'

const FIELD_PROPS = {
  label: 'death saves',
  labelBelow: true
}

export const DeathSaves = ({ className, failures, successes }) => (
  <Field className={classnames(classes.self, className)} {...FIELD_PROPS}>
    <DeathSavesCount className={classes.count} type='successes' />
    <DeathSavesCount className={classes.count} type='failures' />
  </Field>
)

DeathSaves.propTypes = {
  className: PropTypes.string,
  failures: PropTypes.number,
  successes: PropTypes.number
}

export default DeathSaves
