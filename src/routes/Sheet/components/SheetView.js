import React from 'react'

import Vitals from '../../../components/Vitals/Vitals.js'
import classes from './SheetView.css'

export const SheetView = () => (
  <div className={classes.self}>
    <h4>Character Sheet</h4>
    <Vitals className={classes.vitals} />
  </div>
)

export default SheetView
