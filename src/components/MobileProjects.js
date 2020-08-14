import React from 'react'
import './mobileprojects.css'

function MobileProjects({ open }) {
    return (
        <div className={open === "Projects" ? "mobileprojects open" : "mobileprojects"} >
            <div className={open === "Projects" ? "mobileprojects__child fade" : "mobileprojects__child"}>
                Sup
           </div>
        </div>
    )
}

export default MobileProjects;