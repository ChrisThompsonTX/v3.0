import React, { Component } from 'react';
import Clock from './Clock'

class Navbar extends Component {
   
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">{props.children}</ul>
                <div className="navbar__links">
                    <a href="https://www.linkedin.com/in/chris-thompson-832015179/">
                        <i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/ChrisThompsonTX">
                        <i className="fab fa-github"></i></a>
                    <a href="https://angel.co/u/christopher-thio-thompson">
                        <i className="fab fa-angellist"></i></a>
                    <i className="fas fa-battery-full"></i>
                    <Clock />
                </div>
            </nav>
        );
    }
}

export default Navbar;
