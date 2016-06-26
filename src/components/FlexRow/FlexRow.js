import React, { PropTypes } from 'react'
import classnames from 'classnames'

import classes from './FlexRow.css'

export const FlexRow = ({ children, className }) => (
  <div className={classnames(classes.self, className)}>
    {children}
  </div>
)

FlexRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default FlexRow
