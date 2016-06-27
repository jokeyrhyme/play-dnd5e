import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import { ABILITIES_KEYS } from '../../../values/abilities.js'
import Bonuses from '../../../components/Bonuses/Bonuses.js'
import Experience from '../../../components/Experience/Experience.js'
import Scores from '../../../components/Scores/Scores.js'
import Vitals from '../../../components/Vitals/Vitals.js'
import classes from './SheetView.css'

export const SheetView = ({ fields }) => {
  return (
    <div className={classes.self}>
      <section className={classes.section}>
        <Experience className={classes.experience} fields={fields} />
        <Vitals className={classes.vitals} />
        <Bonuses className={classes.bonuses} />
      </section>
      <section className={classes.section}>
        <Scores className={classes.scores} fields={fields} />
      </section>
    </div>
  )
}

SheetView.propTypes = {
  fields: PropTypes.object.isRequired
}

export default reduxForm({
  destroyOnUnmount: false,
  fields: [ ...ABILITIES_KEYS, 'level', 'xp' ],
  form: 'toon',
  initialValues: ABILITIES_KEYS.reduce((prev, ability) => {
    prev[ability] = 10
    return prev
  }, {
    level: 1,
    xp: 0
  })
})(SheetView)
