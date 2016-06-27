import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { ABILITIES_KEYS } from '../../values/abilities.js'
import { getAbilityModifiers } from '../../routes/Sheet/modules/toon.js'
import Ability from '../Ability/Ability.js'
import FlexColumn from '../FlexColumn/FlexColumn.js'
import FlexRow from '../FlexRow/FlexRow.js'
import SavingThrows from '../SavingThrows/SavingThrows.js'
import Skills from '../Skills/Skills.js'
import classes from './Scores.css'

export const Scores = ({ abilityModifiers, className, fields }) => (
  <FlexRow className={classnames(classes.self, className)}>
    <FlexColumn>
      {ABILITIES_KEYS.map((ability) => (
        <Ability key={ability} field={fields[ability]} modifier={abilityModifiers[ability]} />
      ))}
    </FlexColumn>

    <FlexColumn>
      <SavingThrows />
      <Skills />
    </FlexColumn>
  </FlexRow>
)

Scores.propTypes = {
  abilityModifiers: PropTypes.object,
  className: PropTypes.string,
  fields: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  abilityModifiers: getAbilityModifiers(state)
})

export default connect(mapStateToProps)(Scores)
