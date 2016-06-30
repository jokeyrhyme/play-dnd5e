import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import { QUESTIONS } from '../../../values/questions.js'
import Question from './Question.js'
import classes from './ChoicesView.css'

export const ChoicesView = ({ fields }) => {
  return (
    <div className={classes.self}>
      {Object.keys(QUESTIONS).map((id) => {
        return <Question key={id} question={QUESTIONS[id]} field={fields[id]} />
      })}
    </div>
  )
}

ChoicesView.propTypes = {
  fields: PropTypes.object.isRequired
}

export default reduxForm({
  destroyOnUnmount: false,
  fields: Object.keys(QUESTIONS),
  form: 'choices'
})(ChoicesView)
