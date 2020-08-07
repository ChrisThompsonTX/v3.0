import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="contact__left">
                <form className="contact__form">
                    <div className="form__top">
                        <div className="form">
                            <input type="text" name="name" autocomplete="off" required />
                            <label for="name" className="label-name">
                                <span className="content-name">Name</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autocomplete="off" required />
                            <label for="name" className="label-name">
                                <span className="content-name">E-mail</span>
                            </label>
                        </div>
                    </div>
                    <div className="form__bottom">
                        <div className="form">
                            <textarea type="text" name="name" autocomplete="off" required />
                            <label for="name" className="label-name">
                                <span className="content-name">Message</span>
                            </label>
                        </div>

                    </div>
                </form>
            </div>
            <div className="contact__right">
                <div className="contact__email">

                </div>
                <div className="contact__phone">
                    
                </div>
                <div className="contact__social">

                </div>
            </div>
        </div>
    )
}

export default Contact;
