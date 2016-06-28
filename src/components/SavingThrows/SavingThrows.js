import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { ABILITIES_KEYS } from '../../values/abilities.js'
import { getAbilityModifiers } from '../../routes/Sheet/modules/toon.js'
import Field from '../Field/Field.js'
import Skill from '../Skill/Skill.js'
import classes from './SavingThrows.css'

export const SavingThrows = ({ abilityModifiers, className }) => (
  <Field className={classnames(classes.self, className)} label='saving throws' labelBelow>
    {ABILITIES_KEYS.map((type) => (
      <Skill key={type} type={type} value={abilityModifiers[type]} />
    ))}
  </Field>
)

SavingThrows.propTypes = {
  abilityModifiers: PropTypes.object,
  className: PropTypes.string
}

const mapStateToProps = (state) => ({
  abilityModifiers: getAbilityModifiers(state)
})

export default connect(mapStateToProps)(SavingThrows)
