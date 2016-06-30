'use strict'

import { createSelector } from 'reselect'

import { CLASSES } from '../../../values/classes.js'
import { CLASS } from '../../../values/questions.js'
import { getLevel } from '../../Sheet/modules/toon.js'

export const getChoices = (state) => state.form.choices || {}

export const getClass = createSelector(
  getChoices,
  (choices) => (choices[CLASS] || {}).value
)

export const getHitDice = createSelector(
  getClass, getLevel,
  (klass, level) => '' + level + (CLASSES[klass] || {}).hitDice
)
