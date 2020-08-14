import React from 'react'
import './mobilecontact.css'

function MobileContact({ open }) {
    return (
        <div className={open === "Contact" ? "mobilecontact open" : "mobilecontact"} >
            <div className={open === "Contact" ? "mobilecontact__child fade" : "mobilecontact__child"}>
                Sup
           </div>
        </div>
    )
}

export default MobileContact;
