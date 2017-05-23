import groupBy from 'lodash/groupBy'
import moment from 'moment'
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import timetableSlots from './fixtures'
import { names as activities } from '../activities/fixtures'
import { names as artists } from '../artists/fixtures'

const dateHeading = (date) =>
    (parseInt(moment(date).format('H'), 10) < 7 ?
        moment(date).subtract(1, 'day') :
        moment(date)).format('dddd Do MMM')

const dateTime = (date) => moment(date).format('LT')

const slotsByDate = (slots) => groupBy(slots, (s) => dateHeading(s.date))

const slotsByStage = (slots) => groupBy(slots, (s) => s.stage.name)


class Timetable extends PureComponent {
    renderDays() {
        const days = slotsByDate(timetableSlots)
        return Object.keys(days).map((day, i) => this.renderDay({
            day,
            slots: days[day],
            key: i
        }))
    }

    renderDay({ day, slots, key }) {
        const stages = slotsByStage(slots)
        return (
            <div key={ key } className="box-container">
                <h2 className="timetable-day-heading">{ day }</h2>
                {
                    Object.keys(stages).map((stage, i) =>
                        this.renderStage({
                            stage,
                            slots: stages[stage],
                            key: i,
                        })
                    )
                }
            </div>
        )
    }

    renderStage({ stage, slots, key }) {

        return (
            <div key={ key } className="box">
                <h3>{ stage }</h3>
                {
                    slots.sort((a, b) =>
                        a.date < b.date ? -1 : 1
                    ).map(({ id, date }, i) => {
                        const type = artists[id] ? 'artist' : 'activity'
                        const name = artists[id] || activities[id]
                        return <p key={ i }>
                            {
                                name ?
                                    <Link to={ `/${ type }/${ id }` }>
                                        { name }
                                    </Link> :
                                    <span className="disabled">{ id }</span>
                            }
                            &nbsp;
                            { dateTime(date) }
                        </p>
                    })
                }
            </div>
        )
    }

    render() {


        return (
            <section className="timetable">
                <h1>Timetable</h1>
                <p>
                    <strong>Gates open:</strong> Friday 7<sup>th</sup> at 14:00
                </p>
                <p>
                    <strong>Gates close:</strong> Friday 9<sup>th</sup> at 23:00
                </p>
                { this.renderDays() }
            </section>
        )
    }
}

export default Timetable
