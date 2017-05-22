const fs = require('fs')

const path = require('path')

const exclude = [ 'index.js', 'images', 'fixtures.js' ]

console.log('Generating artists fixtures')

const dirFiles = fs.readdirSync('./src/artists')
const files = dirFiles.filter((f) =>
    exclude.indexOf(f) === -1
).map(f =>
    f.split('.')[0]
).filter(f => !!f)

const imports = []
const details = []
const names = []

files.forEach(f => {
    imports.push(`import ${ f }, { name as ${ f }Name } from './${ f }'`)
    details.push(`${ f },`)
    names.push(`${ f }: ${ f }Name,`)
})

fs.writeFileSync('./src/artists/fixtures.js', `
// This is an automatically generated file.
// Manual edits to this file will be overriden by
// the "npm run artist-fixtures" command

${ imports.join('\n') }

export const details = { ${ details.join('\n') } }

export const names = { ${ names.join('\n') } }
`.trim())

console.log('Artist fixtures done!')
