import React, { PropTypes } from 'react'
import classnames from 'classnames'

import classes from './FlexColumn.css'

export const FlexColumn = ({ children, className }) => (
  <div className={classnames(classes.self, className)}>
    {children}
  </div>
)

FlexColumn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default FlexColumn
