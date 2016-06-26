import React, { PropTypes } from 'react'
import classnames from 'classnames'

import FlexRow from '../FlexRow/FlexRow.js'
import classes from './Bonus.css'

export const Bonus = ({ className, type, readOnly, value }) => (
  <FlexRow className={classnames(classes.self, className)}>
    <label className={classes.label}>
      {type}
    </label>
    {(() => {
      if (readOnly) {
        return <span className={classes.value}>{value}</span>
      }
      return <input className={classes.value} type='number' min={0} defaultValue={value || 12} />
    })()}
  </FlexRow>
)

Bonus.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.number
}

export default Bonus
