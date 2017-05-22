import React, { PureComponent } from 'react'

import directionsImg from './images/directions.png'

export default class Directions extends PureComponent {
    render() {
        return (
            <section className="directions">
                <h1>Getting Here</h1>
                <div>
                    <img src={ directionsImg } alt="directions"/>
                </div>
                <div>
                    <h2>PARKING</h2>
                    <p>Following the success of the festival bus last year, our lovely bus drivers will be ready to take you right up to the festival site! There will be heaps of space to park your car in a designated parking area that’s a three minutes drive away and a helpful team will be on hand to direct you there before you catch your FREE shuttle bus to the festival entrance. When parking your car, keep your eyes peeled for the clearly labelled bus stop to board the festival shuttle bus.</p>
                    <h2>SHUTTLE BUS</h2>
                    <p>Take a fun ride with fellow festival visitors! The ABR Festival team will be operating a dedicated shuttle bus service between the parking areas and the festival entrance to make it as easy and hassle free as possible for you to park and then get to and from the event. There will be a frequent service to ensure you don’t have to wait long and that your journey is quick and comfortable. Bus stops will be clearly marked at both the parking area and festival entrance/exit.</p>
                    <h2>CAR SHARING</h2>
                    <p>Why not get your friends together to make the most of the drive down to the festival? Sharing a ride is fun, will save you petrol money, it’s environmentally friendly, and it will be easier for everyone to park once on site!  Keep an eye out for the ‘car sharing’ post on the festival’s Facebook and Instagram pages where you can offer or request rides.</p>
                </div>
            </section>
        )
    }
}
