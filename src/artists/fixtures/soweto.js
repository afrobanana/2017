import image from '../images/05_SOWETO.png'

export const url = 'http://bit.ly/SOWETO'
export const photo = image

// Markdown fields
export const name = 'SOWETO KINCH *(LIVE)*'
export const genres = '*JAZZ* *RAP* *SPOKEN WORD*'
export const text = `
“Kicks pure Jazz and authentic rap into a brave new world,” proclaims the UK’S Guardian. And it’s certainly no overstatement! Soweto Kinch is a multi award-winning saxophonist, MC and composer specialising in a trademark style of jazz, rap and the spoken word unlike that of any other performer in the world.

Revered among both musicians and rappers alike, Soweto has amassed an unprecedented array of accolades including two MOBO awards, two Urban Music Awards, BBC Rising Star Award, BBC Best Jazz Instrumentalist, BBC Best Jazz Band, Montreux Jazz Festival Award, Peter Whittingham Award for Jazz innovation, Winner of the White Foundation World Sax competition and a nomination for the much coveted Mercury Award. A real ambassador of urban culture and he British jazz institution with achievements ranging from the curation of several large international festivals to the scoring of various highly acclaimed music-based theatrical works, this is one performance not to be missed!
`.trim()

export default {
    name,
    genres,
    url,
    photo,
    text,
}
