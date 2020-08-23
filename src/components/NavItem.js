import React, { useState } from 'react';

function NavItem({menu, setMenu, children, title}) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="/"
                className={open && menu === title ? "active icon-button" : "icon-button"}
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open)
                    setMenu(title)
                }}>
                {title}
            </a>

            {open && menu === title ? children : null}
        </li>
    );
}

export default NavItem;