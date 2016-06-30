'use strict'

import { BARBARIAN } from './classes.js'

export const CLASS = 'CLASS'

export const QUESTIONS = {
  [CLASS]: {
    id: CLASS,
    defaultValue: BARBARIAN,
    label: 'Select a class',
    requires: { level: 1 },
    type: CLASS
  }
}
