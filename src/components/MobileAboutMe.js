import React from 'react'
import './mobileaboutme.css'

function MobileAboutMe({ open, setOpen }) {
    return (
        <div className={open === "About Me" ? "mobileaboutme open" : "mobileaboutme"} onClick={() => {setOpen(false)}}>
           <div className={open === "About Me" ? "mobileaboutme__child fade" : "mobileaboutme__child"}>
                Sup
           </div>
        </div>
    )
}

export default MobileAboutMe
