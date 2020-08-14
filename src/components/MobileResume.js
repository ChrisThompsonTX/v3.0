import React from 'react'
import './mobileresume.css'

function MobileResume({ open }) {
    return (
        <div className={open === "Resume" ? "mobileresume open" : "mobileresume"} >
            <div className={open === "Resume" ? "mobileresume__child fade" : "mobileresume__child"}>
                Sup
           </div>
        </div>
    )
}

export default MobileResume;