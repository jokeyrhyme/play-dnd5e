import React from 'react'

import Bonuses from '../../../components/Bonuses/Bonuses.js'
import Experience from '../../../components/Experience/Experience.js'
import Scores from '../../../components/Scores/Scores.js'
import Vitals from '../../../components/Vitals/Vitals.js'
import classes from './SheetView.css'

export const SheetView = () => (
  <div className={classes.self}>
    <section className={classes.section}>
      <Experience className={classes.experience} />
      <Vitals className={classes.vitals} />
      <Bonuses className={classes.bonuses} />
    </section>
    <section className={classes.section}>
      <Scores className={classes.scores} />
    </section>
  </div>
)

export default SheetView
