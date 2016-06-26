import React from 'react'

import Scores from '../../../components/Scores/Scores.js'
import Vitals from '../../../components/Vitals/Vitals.js'
import classes from './SheetView.css'

export const SheetView = () => (
  <div className={classes.self}>
    <h4>Character Sheet</h4>
    <Scores className={classes.scores} />
    <Vitals className={classes.vitals} />
  </div>
)

export default SheetView
