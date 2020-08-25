import React from 'react';

import Clock from './Clock'

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
            <div className="navbar__links">
                <a href="https://www.linkedin.com/in/chris-thompson-832015179/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/ChrisThompsonTX" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-github"></i></a>
                <a href="https://angel.co/u/christopher-thio-thompson" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-angellist"></i></a>
                <i className="fas fa-battery-full"></i>
                <Clock />
            </div>
        </nav>
    );
}

export default Navbar;