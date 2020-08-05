import React, { useEffect, useState } from 'react'
import './clock.css';

function Clock() {
    const [time, setTime] = useState(null); 

    useEffect(() => {
        const interval = setInterval(() => {
            startTime();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function startTime() {
        let today = new Date();
        let d = today.getUTCDay();
        let h = today.getHours();
        let m = today.getMinutes();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let hour = (h > 12 ? h - 12 : h)
        let timeOfDay = (h > 12 ? "PM" : "AM")
        let mins = (m > 9 ? m : `0${m}`)
        setTime(`${days[d]}  ${hour}:${mins} ${timeOfDay}`);
    }

    return (
        <div className="clock">
            {time}
        </div>
    )

}

export default Clock;
