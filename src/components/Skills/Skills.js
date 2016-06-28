import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { SKILL_ABILITY, SKILLS } from '../../values/skills.js'
import { getAbilityModifiers } from '../../routes/Sheet/modules/toon.js'
import Field from '../Field/Field.js'
import Skill from '../Skill/Skill.js'
import classes from './Skills.css'

export const Skills = ({ abilityModifiers, className }) => (
  <Field className={classnames(classes.self, className)} label='skills' labelBelow>
    {SKILLS.map((skill) => (
      <Skill key={skill} type={skill} value={abilityModifiers[SKILL_ABILITY[skill].toLowerCase()]} />
    ))}
  </Field>
)

Skills.propTypes = {
  abilityModifiers: PropTypes.object,
  className: PropTypes.string
}

const mapStateToProps = (state) => ({
  abilityModifiers: getAbilityModifiers(state)
})

export default connect(mapStateToProps)(Skills)
