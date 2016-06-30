import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { CLASSES } from '../../../values/classes.js'
import classes from './ClassQuestion.css'

export const ClassQuestion = ({ className, question, field }) => {
  return (
    <div className={classnames(classes.self, className)}>
      <label>
        {question.label}
        <select className={classes.input} {...field}>
          {Object.keys(CLASSES).map((CLASS) => (
            <option key={CLASS} value={CLASS}>{CLASS.toLowerCase()}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

ClassQuestion.propTypes = {
  className: PropTypes.string,
  question: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired
}

export default ClassQuestion
