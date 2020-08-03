import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import DropdownMenu from './components/DropdownMenu';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function App() {
  return (
    <Navbar>
      <NavItem title={<BoltIcon />} />
      <NavItem title={<h1>Chris Thompson</h1>}>
        <DropdownMenu />
      </NavItem>
      <NavItem title="View" />

      <NavItem title="Contact">
        <DropdownMenu />
      </NavItem>
      
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" 
        className={open ? "active icon-button": "icon-button"} 
        onClick={() => setOpen(!open)}>
        {props.title}
      </a>

      {open && props.children}
    </li>
  );
}

export default App;