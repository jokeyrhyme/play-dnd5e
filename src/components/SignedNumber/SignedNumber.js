import React, { PropTypes } from 'react'
import classnames from 'classnames'

import classes from './SignedNumber.css'

const getSign = (value) => value < 0 ? '-' : '+'

export const SignedNumber = ({ className, value }) => (
  <span className={classnames(classes.self, className)}>
    {getSign(value)}{value}
  </span>
)

SignedNumber.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number
}

export default SignedNumber
