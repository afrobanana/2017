import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import About from './about'
import ArtistDetails from './artists'
import Camping from './guide/camping'
import Directions from './directions'
import Environment from './guide/environment'
import FoodMenu from './guide/menu'
import Guide from './guide'
import Landing from './landing'
import Nav from './nav'
import Timetable from './timetable'

class App extends Component {
  render() {
    return (
      <section className="abr">
        <Nav/>
        <Switch>
            <Route path="/guide/camping" component={ Camping }/>
            <Route path="/guide/environment" component={ Environment }/>
            <Route path="/guide/menu" component={ FoodMenu }/>
            <Route path="/artist/:id" render={
                (props) => <ArtistDetails id={ props.match.params.id }/>
            }/>
            <Route render={ () =>
                <div>
                    <Landing/>
                    <a name="timetable"></a>
                    <Timetable/>
                    <a name="guide"></a>
                    <Guide/>
                    <a name="location"></a>
                    <Directions/>
                    <a name="about"></a>
                    <About/>
                </div>
            } />
        </Switch>
      </section>
    );
  }
}

export default App;
