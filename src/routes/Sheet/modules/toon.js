'use strict'

import { createSelector } from 'reselect'

import { proficiencyBonus } from '../../../lib/toon.js'

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
