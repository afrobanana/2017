import React, { PureComponent } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'

import './style.css'
import FB from '../images/fb.svg'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'

export default class TopNavBar extends PureComponent {
    render () {
        return (
            <Navbar fluid collapseOnSelect className="navigation">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">ABR <sup>2017</sup></a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#timetable">Timetable</a>
                        </li>
                        <li>
                            <a href="#guide">Guide</a>
                        </li>
                        <li>
                            <a href="#location">Location</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li className="tickets">
                            <a href="http://abr.ticket.com.cy/event/page/1"
                               className="btn"
                               target="_blank"
                               rel="noopener noreferrer">
                               Tickets
                            </a>
                        </li>
                        <li className="social"><a href="https://www.facebook.com/TheAfroBananaRepublic" target="_blank" rel="noopener noreferrer"><img src={ FB } alt=""/></a></li>
                        <li className="social"><a href="https://twitter.com/afrobananarpb" target="_blank" rel="noopener noreferrer"><img src={ Twitter } alt=""/></a></li>
                        <li className="social"><a href="https://www.instagram.com/afrobananarpbc/" target="_blank" rel="noopener noreferrer"><img src={ Instagram } alt=""/></a></li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
