import React, { useState } from 'react';
import './index.css';

import DropdownMenu from './components/DropdownMenu';
import Clock from './components/Clock'
import { OSDock } from './components/OSDock'
import Icon from './components/Icon'

import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function App() {

  return (
    <div>
      <Navbar>
        <NavItem title={<BoltIcon />} />
        <NavItem title={<h1>Chris Thompson</h1>}>
          <DropdownMenu />
        </NavItem>
        <NavItem title="View" />
        <NavItem title="Contact">
        </NavItem>
      </Navbar>
      <div className="desktop" >
        <Icon />

      </div>
      <OSDock />
    </div>
  );
}

function Navbar(props) {
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

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="/" 
        className={open ? "active icon-button": "icon-button"} 
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open)
          }}>
        {props.title}
      </a>

      {open && props.children}
    </li>
  );
}

export default App;