import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { SKILLS } from '../../values/skills.js'
import FlexColumn from '../FlexColumn/FlexColumn.js'
import Skill from '../Skill/Skill.js'
import classes from './Skills.css'

export const Skills = ({ className }) => (
  <FlexColumn className={classnames(classes.self, className)}>
    {SKILLS.map((type) => (
      <Skill key={type} type={type} />
    ))}
    <label className={classes.label}>Skills</label>
  </FlexColumn>
)

Skills.propTypes = {
  className: PropTypes.string
}

export default Skills
