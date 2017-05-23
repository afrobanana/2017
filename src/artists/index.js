import React from 'react'
import Markdown from 'react-markdown'

import './style.css'
import * as artists from './fixtures'

export default ({ id }) =>
    <section className="artist">
        <Markdown source={ artists.details[id] }/>
    </section>
