import fs from 'fs'
import chalk from 'chalk'


const loadNotes = function() {
    try {
        const dataBuffer = fs.readdirSync('./notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log(chalk.red('an error occured while reading notes.json: %s', e))
        return []
    }

}

const findNotes = function(title) {
    const allNotes = loadNotes()
    const tehNote = allNotes.find((note) => note.title === title)

    return tehNote
}

const saveNotes = function(notes, toAdd) {
    if (toAdd) {
        const allNotes = loadNotes()
        allNotes.push(notes)
        fs.writeFileSync('./notes.json', JSON.stringify(allNotes))
    } else {
        fs.writeFileSync('./notes.json', JSON.stringify(notes))
    }
    
}

const readNotes = function(title) {
    const tehNote = findNotes(title)

    if (tehNote) {
        console.log(chalk.green('note with title %s is found with a body %s', title, tehNote.body))
    } else {
        console.log(chalk.yellow('note with title %s is not found', title))
    }
}


const addNotes = function(title, body) {
    const existingNote = findNotes(title)

    if (!existingNote) {
        saveNotes({
            title: title,
            body: body
        }, true)
        console.log(chalk.bold.green('a new note is created with \n\ttitle: %s and \n\tbody: %s', title, body))
    } else {
        console.log(chalk.yellow('a new note is already there with title: %s', title))
    }
}

const removeNotes = function(title) {
    const allNotes = loadNotes()
    const notesToKeep = allNotes.filter((note) => note.title !== title)
    saveNotes(notesToKeep, false)
}

const listNotes = function() {
    const allNotes = loadNotes()
    allNotes.forEach(note => {
        console.log(chalk.bold.blueBright('\ttitle: %s and \n\tbody: %s', title, body))
    });
}


export {
    readNotes,
    listNotes,
    addNotes,
    removeNotes
}