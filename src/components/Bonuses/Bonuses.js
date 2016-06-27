import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

import { getProficiencyBonus } from '../../routes/Sheet/modules/toon.js'
import FlexColumn from '../FlexColumn/FlexColumn.js'
import Bonus from '../Bonus/Bonus.js'
import classes from './Bonuses.css'

export const Bonuses = ({ className, proficiencyBonus }) => (
  <FlexColumn className={classnames(classes.self, className)}>
    <Bonus className={classes.bonus} type='inspiration' />
    <Bonus className={classes.bonus} readOnly type='proficiency bonus' value={proficiencyBonus} />
    <Bonus className={classes.bonus} type='passive perception' />
  </FlexColumn>
)

Bonuses.propTypes = {
  className: PropTypes.string,
  proficiencyBonus: PropTypes.number
}

const mapStateToProps = (state) => ({
  proficiencyBonus: getProficiencyBonus(state)
})

export default connect(mapStateToProps)(Bonuses)
