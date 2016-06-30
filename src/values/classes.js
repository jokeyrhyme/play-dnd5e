'use strict'

import {
  STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA
} from './abilities.js'

export const BARBARIAN = 'BARBARIAN'
export const BARD = 'BARD'
export const CLERIC = 'CLERIC'
export const DRUID = 'DRUID'
export const FIGHTER = 'FIGHTER'
export const MONK = 'MONK'
export const PALADIN = 'PALADIN'
export const RANGER = 'RANGER'
export const ROGUE = 'ROGUE'
export const SORCEROR = 'SORCEROR'
export const WARLOCK = 'WARLOCK'
export const WIZARD = 'WIZARD'

export const CLASSES = {
  [BARBARIAN]: {
    hitDice: 'd12',
    savingThrows: [STRENGTH, CONSTITUTION]
  },
  [BARD]: {
    hitDice: 'd8',
    savingThrows: [DEXTERITY, CHARISMA]
  },
  [CLERIC]: {
    hitDice: 'd8',
    savingThrows: [WISDOM, CHARISMA]
  },
  [DRUID]: {
    hitDice: 'd8',
    savingThrows: [INTELLIGENCE, WISDOM]
  },
  [FIGHTER]: {
    hitDice: 'd10',
    savingThrows: [STRENGTH, CONSTITUTION]
  },
  [MONK]: {
    hitDice: 'd8',
    savingThrows: [STRENGTH, DEXTERITY]
  },
  [PALADIN]: {
    hitDice: 'd10',
    savingThrows: [WISDOM, CHARISMA]
  },
  [RANGER]: {
    hitDice: 'd10',
    savingThrows: [STRENGTH, DEXTERITY]
  },
  [ROGUE]: {
    hitDice: 'd8',
    savingThrows: [DEXTERITY, INTELLIGENCE]
  },
  [SORCEROR]: {
    hitDice: 'd6',
    savingThrows: [CONSTITUTION, CHARISMA]
  },
  [WARLOCK]: {
    hitDice: 'd8',
    savingThrows: [WISDOM, CHARISMA]
  },
  [WIZARD]: {
    hitDice: 'd6',
    savingThrows: [INTELLIGENCE, WISDOM]
  }
}
