import React from 'react'
import './mobilecontact.css'

function MobileContact({ open }) {
    return (
        <div className={open === "Contact" ? "mobilecontact open" : "mobilecontact"} >
            <div className={open === "Contact" ? "mobilecontact__child fade" : "mobilecontact__child"}>
                <h1>Contact Me</h1>
                <form className="contact__form">
                    <div className="form__top">
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Name</span>
                            </label>
                        </div>
                        <div className="spacer" />
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">E-mail</span>
                            </label>
                        </div>
                    </div>
                    <div className="form__bottom">
                        <div className="form">
                            <textarea type="text" name="name" autoComplete="off" required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Message</span>
                            </label>
                        </div>
                    </div>
                    <input type="submit" name="" value="Send" />
                </form>
           </div>
        </div>
    )
}

export default MobileContact;
