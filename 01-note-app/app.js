import chalk from 'chalk'
import yargs from 'yargs'
import * as notes from './notes.js'

// https://github.com/yargs/yargs/issues/1854#issuecomment-787509517
const y = yargs()
y.version('1.0.0')

y.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

y.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

y.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

y.command({
    command: 'list',
    describe: 'List all notes',
    handler(argv) {
        notes.listNotes()
    }
})


y.parse(process.argv.slice(2))
