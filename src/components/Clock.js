import React from 'react'
import './clock.css'

function Clock() {


        let today = new Date();
        let d = today.getUTCDay();
        let h = today.getHours();
        let m = today.getMinutes();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let hour = (h > 12 ? h - 12 : h)
        let timeOfDay = (h > 12 ? "PM" : "AM")
        let mins = (m > 9 ? m : `0${m}`)
        let innerHTML = `${days[d - 1]}  ${hour}:${mins} ${timeOfDay}`

    return (
        <div className="clock">
            {innerHTML}
        </div>
    )
}

export default Clock
