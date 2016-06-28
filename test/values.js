'use strict'

const test = require('ava')

const abilities = require('../src/values/abilities.js')
const classes = require('../src/values/classes.js')
const races = require('../src/values/races.js')
const skills = require('../src/values/skills.js')

Object.keys(abilities)
  .filter((value) => typeof abilities[value] === 'string')
  .forEach((constant) => {
    test(`abilities: ${constant}`, (t) => t.is(abilities[constant], constant))
  })

Object.keys(classes)
  .filter((value) => typeof classes[value] === 'string')
  .forEach((constant) => {
    test(`classes: ${constant}`, (t) => t.is(classes[constant], constant))
  })

Object.keys(races)
  .filter((value) => typeof races[value] === 'string')
  .forEach((constant) => {
    test(`races: ${constant}`, (t) => t.is(races[constant], constant))
  })

Object.keys(skills)
  .filter((value) => typeof skills[value] === 'string')
  .forEach((constant) => {
    test(`skills: ${constant}`, (t) => t.is(skills[constant], constant))
  })
