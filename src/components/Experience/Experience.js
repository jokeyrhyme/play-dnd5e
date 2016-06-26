import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import classnames from 'classnames'

import Field from '../Field/Field.js'
import FlexRow from '../FlexRow/FlexRow.js'
import classes from './Experience.css'

export const Experience = ({ className, fields }) => {
  const { level, xp } = fields
  return (
    <FlexRow className={classnames(classes.self, className)}>
      <Field label='level' labelBelow>
        <input className={classes.level} type='number' {...level} />
      </Field>
      <Field label='XP' labelBelow>
        <input className={classes.xp} type='number' {...xp} />
      </Field>
    </FlexRow>
  )
}

Experience.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.object.isRequired
}

export default reduxForm({
  fields: ['level', 'xp'],
  form: 'toon',
  initialValues: {
    level: 1,
    xp: 0
  }
})(Experience)
