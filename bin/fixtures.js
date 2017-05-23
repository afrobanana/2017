const fs = require('fs')
const path = require('path')
const exclude = [ 'index.js' ]

const imports = []
const details = []
const names = []

console.log('Generating artists fixtures...')

const dirFiles = fs.readdirSync('./src/artists/fixtures')
const files = dirFiles.filter((f) =>
    exclude.indexOf(f) === -1
).map(f =>
    f.split('.')[0]
).filter(f => !!f)

files.forEach(f => {
    imports.push(`import ${ f }, { name as ${ f }Name } from './${ f }'`)
    details.push(`${ f }`)
    names.push(`${ f }: ${ f }Name`)
})

fs.writeFileSync('./src/artists/fixtures/index.js', `
// This is an automatically generated file.
// Manual edits to this file will be overriden by
// the "npm run artist-fixtures" command

${ imports.join('; ') }
export const details = { ${ details.join(', ') } }
export const names = { ${ names.join(', ') } }
`.trim())

console.log('Artist fixtures done!')
