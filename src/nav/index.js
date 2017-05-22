import React, { PureComponent } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import { NavLink, } from 'react-router-dom'

import './style.css'

export default class TopNavBar extends PureComponent {
    render () {
        return (
            <Navbar fluid collapseOnSelect className="navigation">
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/" exact={ true }>ABR <sup>2017</sup></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/" exact={ true } activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/timetable" activeClassName="active">Timetable</NavLink>
                        </li>
                        <li>
                            <NavLink to="/guide" activeClassName="active">Guide</NavLink>
                        </li>
                        <li>
                            <NavLink to="/location" activeClassName="active">Location</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li>
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">Tickets</a>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
