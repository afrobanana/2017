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
                        <NavLink to="/">ABR <sup>2017</sup></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/timetable">Timetable</NavLink>
                        </li>
                        <li>
                            <NavLink to="/guide">Guide</NavLink>
                        </li>
                        <li>
                            <NavLink to="/location">Location</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <a href="http://abr.ticket.com.cy/event/page/1" target="_blank" rel="noopener noreferrer">Tickets</a>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
