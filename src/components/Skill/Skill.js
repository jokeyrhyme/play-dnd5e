import React, { PropTypes } from 'react'
import classnames from 'classnames'

import FlexRow from '../FlexRow/FlexRow.js'
import classes from './Skill.css'

export const Skill = ({ className, type, value }) => (
  <FlexRow className={classnames(classes.self, className)}>
    <label className={classes.label}>
      {type.toLowerCase().replace(/_/g, ' ')}
    </label>
    <input className={classes.proficient} type='checkbox' />
    <span className={classes.value}>{value || 0}</span>
  </FlexRow>
)

Skill.propTypes = {
  className: PropTypes.string,
  proficient: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.number
}

export default Skill
