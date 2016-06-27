'use strict'

const test = require('ava')

const toon = require('../src/lib/toon.js')

test('abilityModifier', (t) => {
  const fixtures = [
    { score: 1, expected: -5 },
    { score: 8, expected: -1 },
    { score: 10, expected: 0 },
    { score: 11, expected: 0 },
    { score: 12, expected: 1 },
    { score: 13, expected: 1 },
    { score: 20, expected: 5 }
  ]
  fixtures.forEach(({ score, expected }) => {
    t.is(toon.abilityModifier(score), expected)
  })
})

test('proficiencyBonus', (t) => {
  const fixtures = [
    { level: 1, expected: 2 },
    { level: 4, expected: 2 },
    { level: 5, expected: 3 },
    { level: 8, expected: 3 },
    { level: 9, expected: 4 },
    { level: 12, expected: 4 },
    { level: 13, expected: 5 },
    { level: 16, expected: 5 },
    { level: 17, expected: 6 },
    { level: 20, expected: 6 }
  ]
  fixtures.forEach(({ level, expected }) => {
    t.is(toon.proficiencyBonus(level), expected)
  })
})
