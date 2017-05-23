import Modal from 'react-bootstrap/lib/Modal'
import React, { PureComponent } from 'react'
import Sticky from 'react-stickynode';
import { Switch, Route, } from 'react-router-dom'
import { withRouter } from 'react-router'

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
import Newsletter from './newsletter'

import { names as artistsNames } from './artists/fixtures'

class App extends PureComponent {
    renderPage(title, component) {
        const goBack = this.props.history.goBack
        return (
            <Modal show={ true } onHide={ goBack }>
                <Modal.Body>
                    { component }
                </Modal.Body>
            </Modal>
        )
    }

    render() {
        console.log('render app', this.props)
        return (
          <section className="abr">
            <Sticky>
                <Nav/>
            </Sticky>
            <Switch>
                <Route path="/guide/camping" render={
                    () => this.renderPage('Camping', <Camping/>)
                }/>
                <Route path="/guide/environment" render={
                    () => this.renderPage('Environment', <Environment/>)
                }/>
                <Route path="/guide/menu" render={
                    () => this.renderPage('Food & Drinks', <FoodMenu/>)
                }/>
                <Route path="/guide/menu" render={
                    () => this.renderPage('Food & Drinks', <FoodMenu/>)
                }/>
                <Route path="/artist/:id" render={
                    (props) => this.renderPage(
                        artistsNames[props.match.params.id],
                        <ArtistDetails id={ props.match.params.id }/>
                    )
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
            <Newsletter/>
          </section>
        );
    }
}

export default withRouter(App);
