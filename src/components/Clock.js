import React, { useEffect, useState } from 'react'
import './clock.css';

function Clock() {

    function startTime() {
        let today = new Date();
        let d = today.getUTCDay();
        let h = today.getHours();
        let m = today.getMinutes();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let hour = (h > 12 ? h - 12 : h)
        let timeOfDay = (h > 12 ? "PM" : "AM")
        let mins = (m > 9 ? m : `0${m}`)
        return`${days[d]}  ${hour}:${mins} ${timeOfDay}`;
    }

    const [time, setTime] = useState(startTime()); 

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(startTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="clock">
            {time}
        </div>
    )

}

export default Clock;
