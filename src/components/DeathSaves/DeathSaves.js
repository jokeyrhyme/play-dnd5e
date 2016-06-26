import React, { PropTypes } from 'react'
import classnames from 'classnames'

import DeathSavesCount from '../DeathSavesCount/DeathSavesCount.js'
import FlexColumn from '../FlexColumn/FlexColumn.js'
import classes from './DeathSaves.css'

export const DeathSaves = ({ className, failures, successes }) => (
  <FlexColumn className={classnames(classes.self, className)}>
    <label className={classes.label}>
      death saves
    </label>
    <DeathSavesCount className={classes.count} type='successes' />
    <DeathSavesCount className={classes.count} type='failures' />
  </FlexColumn>
)

DeathSaves.propTypes = {
  className: PropTypes.string,
  failures: PropTypes.number,
  successes: PropTypes.number
}

export default DeathSaves
