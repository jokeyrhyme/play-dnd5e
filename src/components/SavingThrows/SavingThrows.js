import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { ABILITIES } from '../../values/abilities.js'
import FlexColumn from '../FlexColumn/FlexColumn.js'
import Skill from '../Skill/Skill.js'
import classes from './SavingThrows.css'

export const SavingThrows = ({ className }) => (
  <FlexColumn className={classnames(classes.self, className)}>
    {ABILITIES.map((type) => (
      <Skill key={type} type={type} />
    ))}
    <label className={classes.label}>Saving Throws</label>
  </FlexColumn>
)

SavingThrows.propTypes = {
  className: PropTypes.string
}

export default SavingThrows
