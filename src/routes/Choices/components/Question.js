import React, { PropTypes } from 'react'

import ClassQuestion from './ClassQuestion.js'
import { CLASS } from '../../../values/questions.js'

const TYPES = {
  [CLASS]: ClassQuestion
}

export const Question = ({ field, question }) => {
  const QuestionType = TYPES[question.type]
  if (QuestionType) {
    return (
      <QuestionType field={field} question={question} />
    )
  }
  return (
    <div>
      Unknown question type
    </div>
  )
}

Question.propTypes = {
  field: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired
}

export default Question
