'use strict'

export const abilityModifier = (score) => Math.floor((score - 10) / 2)

export const proficiencyBonus = (level) => Math.ceil(level / 4) + 1
