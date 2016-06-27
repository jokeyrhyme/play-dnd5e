'use strict'

export const STRENGTH = 'STRENGTH'
export const DEXTERITY = 'DEXTERITY'
export const CONSTITUTION = 'CONSTITUTION'
export const INTELLIGENCE = 'INTELLIGENCE'
export const WISDOM = 'WISDOM'
export const CHARISMA = 'CHARISMA'

export const ABILITIES = [
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA
]

export const ABILITIES_KEYS = ABILITIES.map((ability) => ability.toLowerCase())
