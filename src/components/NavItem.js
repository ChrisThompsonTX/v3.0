import React, { useState } from 'react';

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="/"
                className={open ? "active icon-button" : "icon-button"}
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

export default NavItem;