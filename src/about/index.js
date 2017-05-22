import React from 'react'

import logoImg from './images/abr-logo.png'
import sponsorsImg from './images/sponsors.png'

export default () =>
    <section className="about">
        <h1>Production</h1>
        <div>
            <img src={ logoImg } alt="ABR stands for Alternative Brains Rule"/>
        </div>
        <div>
            <img src={ sponsorsImg } alt="These are good people"/>
        </div>
    </section>
