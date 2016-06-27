'use strict'

import { createSelector } from 'reselect'

import { ABILITIES_KEYS } from '../../../values/abilities.js'
import { abilityModifier, proficiencyBonus } from '../../../lib/toon.js'

export const getToon = (state) => state.form.toon

export const getLevel = createSelector(
  getToon,
  (toon) => Math.max(toon.level.value, 1)
)

export const getXp = createSelector(
  getToon,
  (toon) => Math.max(toon.xp.value, 0)
)

export const getProficiencyBonus = createSelector(
  getLevel,
  (level) => proficiencyBonus(level)
)

export const getAbilityScores = createSelector(
  getToon,
  (toon) => ABILITIES_KEYS.reduce((prev, ability) => {
    prev[ability] = toon[ability].value
    return prev
  }, {})
)

export const getAbilityModifiers = createSelector(
  getAbilityScores,
  (abilityScores) => ABILITIES_KEYS.reduce((prev, ability) => {
    prev[ability] = abilityModifier(abilityScores[ability])
    return prev
  }, {})
)
