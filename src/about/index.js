import React from 'react'

import './style.css'
import logoImg from './images/abr-logo.png'
import sponsorsImg from './images/sponsors.png'

export default () =>
    <section className="about">
        <h1>Production</h1>
        <div>
            <img src={ logoImg } alt="ABR stands for Alternative Brains Rule"/>
        </div>
        <p className="sponsors">
            <img src={ sponsorsImg } alt="These are good people"/>
        </p>
    </section>
