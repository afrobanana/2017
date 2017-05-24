import React, { PureComponent } from 'react'
import groupBy from 'lodash/groupBy'
import moment from 'moment'

import './style.css'
import timetableSlots, { ACTIVITIES, KIDS_ACTIVITIES } from './fixtures'
import { ActivityLink, getActivityById } from '../activities'
import { ArtistLink, getArtistById } from '../artists'

export const dateHeading = (date) =>
    (parseInt(moment(date).format('H'), 10) < 7 ?
        moment(date).subtract(1, 'day') :
        moment(date)).format('dddd Do MMMM')

export const dateTime = (date) => moment(date).format('HH:mm')

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
                    Object.keys(stages).sort((a, b) =>
                        stages[a][0].stage.displayOrder < stages[b][0].stage.displayOrder ? -1 : 1
                    ).map((stage, i) =>
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
        const isActivity = stage === ACTIVITIES.name ||
                stage === KIDS_ACTIVITIES.name
        const type = isActivity ? 'activity' : 'artist'

        return (
            <div key={ key } className={ `box ${ type }` }>
                <h3>{ stage }</h3>
                {
                    slots.sort((a, b) =>
                        a.date < b.date ? -1 : 1
                    ).map(({ id, date }, i) => {
                        const entry = isActivity ? getActivityById(id) : getArtistById(id)
                        return (
                            <p key={ i } className="entry">
                                <em className="time">{ dateTime(date) }</em>
                                <br/>
                                {
                                    ActivityLink(entry) ||
                                        ArtistLink(entry) ||
                                        <span className="disabled">{ id }</span>
                                }
                            </p>
                        )
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
                { this.renderDays() }
            </section>
        )
    }
}

export default Timetable
