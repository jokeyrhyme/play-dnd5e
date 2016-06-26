import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { ABILITIES } from '../../values/abilities.js'
import Field from '../Field/Field.js'
import Skill from '../Skill/Skill.js'
import classes from './SavingThrows.css'

export const SavingThrows = ({ className }) => (
  <Field className={classnames(classes.self, className)} label='saving throws' labelBelow>
    {ABILITIES.map((type) => (
      <Skill key={type} type={type} />
    ))}
  </Field>
)

SavingThrows.propTypes = {
  className: PropTypes.string
}

export default SavingThrows
