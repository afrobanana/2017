import image from '../images/02_TOM_TRAGO.png'

export const url = 'http://bit.ly/TOMTRAGO'
export const photo = image

// Markdown fields
export const name = 'TOM TRAGO (DJ SET)'
export const genres = '*HOUSE*'
export const text = `
An internationally renowned DJ, producer, live performer and label owner with three critically acclaimed albums to his name, the Dutchman divides his time between all-day studio sessions, DJ gigs and live shows all over the world, accentuated steady stream of musical collaborations. His trademark style blends the best of three decades of dance music – disco, boogie, synth funk, Detroit techno and more – with insatiable house rhythms and an intrinsic grasp of what makes dancefloors tick.

Several of his tracks  (not least the rush-inducing ‘Use Me Again’ and 2015’s equally delicious ‘Hidden Heart Of Gold’ and ‘Brutal Romance’) sound like future classics. And it’s not surprising that Tom is a man in high demand. Aside from travelling the globe, he continues to develop his Voyage Direct label; an outlet for Dutch electronic music that’s more like an extended family of like-minded musicians than a regular imprint. We are eagerly anticipating the dance floor magic that Tom Trago alone can conjure at this year's Out of The Box stage!
`.trim()

export default {
    name,
    genres,
    url,
    photo,
    text,
}
