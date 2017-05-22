import React from 'react'
import Markdown from 'react-markdown'

import * as artists from './fixtures'

export default ({ id }) =>
    <Markdown source={ artists.details[id] }/>
