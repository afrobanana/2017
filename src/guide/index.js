import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Thumbnail from '../Thumbnail'

import './style.css'
import mapImg from './images/map.png'

export default class Guide extends PureComponent {
    render() {
        return (
            <section className="guide">
                <h1>Your Guide to ABR</h1>
                <Thumbnail offset={ [0, '40%'] }>
                    <a href={ `${ mapImg }` } target="_blank" rel="noopener noreferrer">
                        <img src={ mapImg } alt="Location map"/>
                    </a>
                </Thumbnail>
                <div className="box-container">
                    <div className="box">
                        <h3>ABR Square: Day &amp; Night</h3>
                        <p>
                            With the brand new ABR Square at the heart of the festival this year, it will form a great hub of activity where all things hip and happening will be drawing attention! With countless stalls dishing up all sorts of concept food to tantalize your taste buds, topped off by the dreamiest drinks and cocktails to lift your spirits, crowds can kick back and enjoy the sounds of the ABR Radio and live DJ sets taking everyone on a faraway journey.
                        </p>
                    </div>
                    <div className="box">
                        <h3>Daily Activities</h3>
                        <p>Kids can also be a part of the fun with a special area set up especially for young ones where fun, education and innovation will come together in creative workshops. And for all those adults looking to relax and unwind, there will be plenty of wellness activities to enjoy, including yoga and Tai chi.</p>
                        <p>There will also be inspirational talks to enjoy, with Open Mic sessions and giving you the chance to share your thoughts. Geodesic domes on site will be encouraging community practices as festival-goers get the chance to charge mobile phones and enjoy collective festival mix tapes made for sharing.  And when things heat up a little? Cooling stations should do the trick!</p>
                    </div>
                    <div className="box">
                        <h3>Artistic Explorations</h3>
                        <p>A highly experiential event, the ABR Festival will be characterised by a strong participatory ethos, with special attention given to creativity and artistic endeavours. With a wide range of artists across all sorts of creative fields partaking in the event, festival goers will have the chance to enjoy a range of exciting interactive projects and experiences. From an emphasis on eco awareness and recycling, to illustration and street art, participants will be encouraged to expand their horizons and experience art in a whole new way.</p>
                        <Link to="/guide/creative" className="btn btn-primary">Learn More</Link>
                    </div>
                    <div className="box">
                        <h3>Camping</h3>
                        <p>Kornos is one of the island’s most stunning forested areas and festival-goers can make the most of the three day event in the great outdoors by setting up a tent or parking a caravan under the cool shade of leafy eucalyptus and pine trees at the festival campsite. A friendly and welcoming area, there will be plenty of showers and toilets to make the experience as pleasant as possible. </p>
                        <Link to="/guide/camping" className="btn btn-primary">Learn More</Link>
                    </div>
                    <div className="box">
                        <h3>Environment</h3>
                        <p>We care about your safety and being friendly to the environment.  For your peace of mind and for the sake of the natural world, please read on!</p>
                        <Link to="/guide/environment" className="btn btn-primary">Health &amp; Safety</Link>
                    </div>
                    <div className="box">
                        <h3>Food &amp; Drinks</h3>
                        <p>Whether you’re after breakfast, lunch or dinner, a whole team of happy cooks will be on hand throughout the duration of the event to curb your hunger pangs and satiate your taste buds with a range of sweet and savoury delights. With a greater variety of food than ever before, select eateries and street food vendors will be catering to your every need from morning to night.</p>
                        <Link to="/guide/menu" className="btn btn-primary">Menu</Link>
                    </div>
                </div>
            </section>
        )
    }
}
