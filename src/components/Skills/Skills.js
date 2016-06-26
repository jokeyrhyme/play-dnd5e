import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { SKILLS } from '../../values/skills.js'
import Field from '../Field/Field.js'
import Skill from '../Skill/Skill.js'
import classes from './Skills.css'

export const Skills = ({ className }) => (
  <Field className={classnames(classes.self, className)} label='skills' labelBelow>
    {SKILLS.map((type) => (
      <Skill key={type} type={type} />
    ))}
  </Field>
)

Skills.propTypes = {
  className: PropTypes.string
}

export default Skills
