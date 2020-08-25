import React from 'react'
import './mobilecontact.css'

function MobileContact({ open }) {
    return (
        <div className={open === "Contact" ? "mobilecontact open" : "mobilecontact"} >
            <div className={open === "Contact" ? "mobilecontact__child fade" : "mobilecontact__child"}>
                <h1>Contact Me</h1>
                <form className="mobilecontact__form">
                    <div className="mobileform">
                        <input type="text" name="name" autoComplete="off" required />
                        <label htmlFor="name" className="label-name">
                            <span className="content-name">Name</span>
                        </label>
                    </div>
                    <div className="mobileform">
                        <input type="text" name="name" autoComplete="off" required />
                        <label htmlFor="name" className="label-name">
                            <span className="content-name">E-mail</span>
                        </label>
                    </div>
                        <div className="mobileform mobileform__bottom">
                            <textarea type="text" name="name" autoComplete="off" required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Message</span>
                            </label>
                        </div>
                    <input type="submit" name="" value="Send" />
                </form>
           </div>
        </div>
    )
}

export default MobileContact;
