import React, { PropTypes } from 'react'
import classnames from 'classnames'

import FlexColumn from '../FlexColumn/FlexColumn.js'
import classes from './Field.css'

export const Field = ({ children, className, containerClass, label, labelBelow }) => (
  <FlexColumn className={classnames(classes.self, className)}>
    {label && <label className={classnames(classes.label, labelBelow && classes.labelBelow)}>
      {label}
    </label>}
    <div className={classnames(classes.children, labelBelow && classes.labelBelow, containerClass)}>
      {children}
    </div>
  </FlexColumn>
)

Field.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  containerClass: PropTypes.string,
  label: PropTypes.string,
  labelBelow: PropTypes.bool
}

export default Field
