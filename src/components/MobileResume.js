import React from 'react'
import './mobileresume.css'

function MobileResume({ open }) {
    return (
        <div className={open === "Resume" ? "mobileresume open" : "mobileresume"} >
            <div className={open === "Resume" ? "mobileresume__child fade" : "mobileresume__child"}>
                <div className="mobileresume__container">
                    <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vRpvdKt_hooSkI6gwJxHUgWBpVGIW1X9lEM99CrfLY3doCpaxetAwjuFVi5937Qt8Bohv27XBY47V85/pub" />
                </div>
           </div>
        </div>
    )
}

export default MobileResume;