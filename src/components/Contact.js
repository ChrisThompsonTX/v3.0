import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="contact__left">
                <h1>Contact Me</h1>
                <form 
                    className="contact__form"
                    method="POST"
                    data-email="from_email@example.com"
                    action="https://script.google.com/macros/s/AKfycbyYqm8-a57BzgEIkPLIjGhoEQWELXzaryG69Srw/exec"
                >
                    <div className="form__top">
                        <div className="form">
                            <input type="text" id="name" name="name" autoComplete="off" required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Name</span>
                            </label>
                        </div>
                        <div className="spacer"/>
                        <div className="form">
                            <input type="text" id="email" name="email" autoComplete="off" required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">E-mail</span>
                            </label>
                        </div>
                    </div>
                    <div className="form__bottom">
                        <div className="form">
                            <textarea id="message" type="text" name="message" autoComplete="off" required />
                            <label htmlFor="name" className="label-name">
                                <span className="content-name">Message</span>
                            </label>
                        </div>
                    </div>
                    <input type="submit" name="" value="Send"/>
                </form>
            </div>
            <div className="contact__right">
                <div className="contact__email">
                    <i className="far fa-envelope fa-2x"></i>
                    <div className="email__info">
                        <h1>Email</h1>
                        <h2>chris.tx86@gmail.com</h2>
                    </div>
                </div>
                <div className="contact__divider"/>
                <div className="contact__phone">
                    <i className="fas fa-phone fa-2x"></i>
                    <div className="phone__info">
                        <h1>Phone</h1>
                        <h2>(281) 660-6542</h2>
                    </div>
                </div>
                <div className="contact__divider"/>
                <div className="contact__social">
                    <i className="far fa-user fa-2x"></i>
                    <div className="social__info">
                        <h1>Social Links</h1>
                        <div className="social__links">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
