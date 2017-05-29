import React, { PureComponent } from 'react'

import Thumbnail from '../Thumbnail'
import './style.css'
import directionsImg from './images/directions.png'
import mapImg from './images/google-map.png'

export default class Directions extends PureComponent {

    render() {
        return (
            <section className="directions">
                <h1>Getting Here</h1>
                <div className="box-container">
                    <div className="box">
                        <h2>CAR SHARING</h2>
                        <p>Why not get your friends together to make the most of the drive down to the festival? Sharing a ride is fun, will save you petrol money, it’s environmentally friendly, and it will be easier for everyone to park once on site!</p>
                        <p>Keep an eye out for the ‘car sharing’ post on the festival’s Facebook and Instagram pages where you can offer or request rides.</p>
                    </div>
                    <div className="box">
                        <h2>PARKING</h2>
                        <p>Following the success of the festival bus last year, our lovely bus drivers will be ready to take you right up to the festival site! </p>
                        <p>There will be heaps of space to park your car in a designated parking area that’s a three-minute drive away and a helpful team will be on hand to direct you there before you catch your FREE shuttle bus to the festival entrance.</p>
                        <p>When parking your car, keep your eyes peeled for the clearly labelled bus stop to board the festival shuttle bus.</p>
                    </div>
                    <div className="box">
                        <h2>SHUTTLE BUS</h2>
                        <p>Take a fun ride with fellow festival visitors! The ABR Festival team will be operating a dedicated shuttle bus service between the parking areas and the festival entrance to make it as easy and hassle free as possible for you to park and then get to and from the event.</p>
                        <p>There will be a frequent service to ensure you don’t have to wait long and that your journey is quick and comfortable.</p>
                        <p>Bus stops will be clearly marked at both the parking area and festival entrance/exit.</p>
                    </div>
                </div>
                <div className="maps box-container">
                    <Thumbnail className="box" >
                        <a
                            href="https://www.google.com/maps/place/The+Afro+Banana+Republic+Festival/@34.87393,33.366545,11z/data=!4m5!3m4!1s0x0:0xbd7734f7a94bf975!8m2!3d34.902901!4d33.402487?hl=en-GB"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={ mapImg } alt="Google Map"/>
                        </a>
                    </Thumbnail>
                    <Thumbnail className="box">
                        <a href={ `${ directionsImg }` } target="_blank" rel="noopener noreferrer">
                            <img src={ directionsImg } alt="directions"/>
                        </a>
                    </Thumbnail>
                </div>
                <div className="directions-drive box-container">
                    <div className="box">
                        <h3>From Nicosia</h3>
                        <ol>
                            <li>Take the exit for <strong>Kornos, Stavrovouni</strong>.</li>
                            <li>At the end of the road turn left.</li>
                            <li>At the end of the road turn right.</li>
                            <li>
                                Keep going straight for about 2 km, until you reach the Festival Checkpoint.
                                <br/>
                                Crew assistants and signage will direct you to the Parking Area, Campers Drop-off or Campers Parking.
                            </li>
                        </ol>
                    </div>
                    <div className="box">
                        <h3>From Limassol</h3>
                        <ol>
                            <li>Take the exit for <strong>Kornos, Stavrovouni</strong>.</li>
                            <li>At the end of the road turn right.</li>
                            <li>At the end of the road turn right (again).</li>
                            <li>
                                Keep going straight for about 2 km, until you reach the Festival Checkpoint.
                                <br/>
                                Crew assistants and signage will direct you to the Parking Area, Campers Drop-off or Campers Parking.
                            </li>
                        </ol>
                    </div>
                    <div className="box">
                        <h3>From Larnaca</h3>
                        <ol>
                            <li>Take the exit from <strong>Kalo Chorio</strong> roundabout to Kalo Chorio.</li>
                            <li>Keep going until you find the roundabout of Mosfiloti.</li>
                            <li>
                                Turn left and follow the old Nicosia-Limassol road towards Limassol for 3 km, until you reach the Festival Checkpoint
                                <br/>
                                Crew assistants and signage will direct you to the Parking Area, Campers Drop-off or Campers Parking.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        )
    }
}
