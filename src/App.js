import React, { PureComponent } from 'react'
import Sticky from 'react-stickynode';
import { Switch, Route, } from 'react-router-dom'
import { withRouter } from 'react-router'

import About from './about'
import Camping from './guide/camping'
import Creative from './guide/creative'
import Directions from './directions'
import Environment from './guide/environment'
import FoodMenu from './guide/menu'
import Guide from './guide'
import Landing from './landing'
import Nav from './nav'
import Tickets from './tickets'
import Timetable from './timetable'
import { ArtistModal } from './artists'
import { ActivityModal } from './activities'

class App extends PureComponent {
    constructor(props) {
        super(props)
        this.goHome = this.goHome.bind(this)
    }

    goHome() {
        const history = this.props.history
        history.push('/')
    }

    render() {
        return (
          <section className="abr">
            <Sticky>
                <Nav/>
            </Sticky>
            <Switch>
                <Route path="/guide/camping" render={
                    () => this.renderPage(<Camping/>)
                }/>
                <Route path="/guide/environment" render={
                    () => this.renderPage(<Environment/>)
                }/>
                <Route path="/guide/menu" render={
                    () => this.renderPage(<FoodMenu/>)
                }/>
                <Route path="/guide/creative" render={
                    () => this.renderPage(<Creative/>)
                }/>
                <Route path="/artist/:id" render={
                    (props) => <ArtistModal
                                    id={ props.match.params.id }
                                    goBack={ this.goHome }
                                    />
                }/>
                <Route path="/activity/:id" render={
                    (props) => <ActivityModal
                                    id={ props.match.params.id }
                                    goBack={ this.goHome }
                                    />
                }/>
            </Switch>
            <Landing/>
            <a name="timetable" className="section-break">&nbsp;</a>
            <Timetable/>
            <a name="guide" className="section-break">&nbsp;</a>
            <Guide/>
            <a name="location" className="section-break">&nbsp;</a>
            <Directions/>
            <a name="about" className="section-break">&nbsp;</a>
            <About/>
            <Tickets/>
          </section>
        );
    }
}

export default withRouter(App);
