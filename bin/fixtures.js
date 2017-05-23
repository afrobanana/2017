const fs = require('fs')

const paths = [ 'artists', 'activities' ]
const exclude = [ 'index.js' ]

const stringify = ({ imports, details, names }) =>
`// This is an automatically generated file.
// Manual edits to this file will be overriden by
// the "npm run fixtures" command
${ imports.join('; ') }
export const details = { ${ details.join(', ') } }
export const names = { ${ names.join(', ') } }
`.trim()

paths.forEach(path => {
    console.log(`Generating ${ path } fixtures...`)

    const imports = []
    const details = []
    const names = []

    fs.readdirSync(`./src/${ path }/fixtures`).filter((f) =>
        exclude.indexOf(f) === -1
    ).map(f =>
        f.split('.')[0]
    ).filter(f =>
        !!f
    ).forEach(f => {
        const fNorm = f.replace(/\W+/g, '')
        imports.push(`import ${ fNorm }, { name as ${ fNorm }Name } from './${ f }'`)
        details.push(`'${ f }': ${ fNorm }`)
        names.push(`'${ f }': ${ fNorm }Name`)
    })

    fs.writeFileSync(`./src/${ path }/fixtures/index.js`, stringify({
        imports,
        details,
        names,
    }))

    console.log(`${ path } fixtures done!`)
})
