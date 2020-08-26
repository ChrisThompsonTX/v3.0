import React from 'react'
import './contact.css'

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: ""
        };


        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }


    render() {
        const {status} = this.state;

        return (
            <div className="contact">
                <div className="contact__left">
                    <h1>Contact Me</h1>
                    <form 
                        className="contact__form"
                        method="POST"
                        onSubmit={this.submitForm}
                        action="https://formspree.io/xqkyorlq"
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
                        {status === "SUCCESS" ? <p>Thanks!</p> : <input type="submit" name="" value="Send" />}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
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
    };
}

