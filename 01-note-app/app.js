import chalk from 'chalk'
import validator from 'validator'
import fs from 'fs'
import add from './utils.js'
import getNotes from './notes.js'


fs.writeFileSync('node.txt', 'this is an example file')
fs.appendFileSync('node.txt', '\nthis is 2nd line in the example file')
// fs.appendFileSync('node.txt', '\nthis is written by ' + name)
fs.appendFileSync('node.txt', '\n the value is ' + add(2, 3))

console.log(validator.isEmail('pops@cicle.com'))

console.log(chalk.green('Hello %s'), 'pops');