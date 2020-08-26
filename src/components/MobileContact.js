import React from 'react'
import './mobilecontact.css'

export default class MobileContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: ""
        };

        this.submitForm =this.submitForm.bind(this);
    };

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
        const {open} = this.props;

        return (
            <div className={open === "Contact" ? "mobilecontact open" : "mobilecontact"} >
                <div className={open === "Contact" ? "mobilecontact__child fade" : "mobilecontact__child"}>
                    <h1>Contact Me</h1>
                    <form 
                        className="mobilecontact__form"
                        method="POST"
                        onSubmit={this.submitForm}
                        action="https://formspree.io/xqkyorlq"
                        >
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
                        {status === "SUCCESS" ? <p>Thanks!</p> : <input type="submit" name="" value="Send" />}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>
            </div>
            </div>
        )
    };
}

