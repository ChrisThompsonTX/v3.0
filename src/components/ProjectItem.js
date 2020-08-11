import React from 'react'
import './projectitem.css'

export default function ProjectItem(props) {
    let { title, date, tech, description } = props

    return (
        <div className="projectitem__container">
            <div className="projectitem">
                <div className="projectitem__header" >
                    <div className="projectitem__title">{title}</div>
                    <div className="projectitem__date">{date}</div>
                </div>
                <div className="projectitem__tech">{tech}</div>
                <div className="projectitem__description">{description}</div>
            </div>
            <div className="contact__divider" />
        </div>
    )
}
