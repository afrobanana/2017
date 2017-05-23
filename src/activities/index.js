import React from 'react'
import Markdown from 'react-markdown'

import './style.css'
import * as activities from './fixtures'

export default ({ id }) =>
    <section className="activity">
        <Markdown source={ activities.details[id] }/>
    </section>
