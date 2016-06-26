import React, { PropTypes } from 'react'
import classnames from 'classnames'

import { ABILITIES } from '../../values/abilities.js'
import Ability from '../Ability/Ability.js'
import FlexColumn from '../FlexColumn/FlexColumn.js'
import FlexRow from '../FlexRow/FlexRow.js'
import SavingThrows from '../SavingThrows/SavingThrows.js'
import Skills from '../Skills/Skills.js'
import classes from './Scores.css'

export const Scores = ({ className }) => (
  <FlexRow className={classnames(classes.self, className)}>
    <FlexColumn>
      {ABILITIES.map((ability) => (
        <Ability key={ability} type={ability} />
      ))}
    </FlexColumn>

    <FlexColumn>
      <SavingThrows />
      <Skills />
    </FlexColumn>
  </FlexRow>
)

Scores.propTypes = {
  className: PropTypes.string
}

export default Scores
