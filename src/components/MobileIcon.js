import React from 'react';
import './mobileicon.css';

function MobileIcon({ icon, name, open, setOpen, link }) {

    function handleClick() {
        if (open === false) {
            setOpen(name)
        } else if (open === name) {
            setOpen(false)
        }
    }

    return (
        <a className={open === name || open === false ? "mobileicon__link open" : "mobileicon__link closed" } href={link} >
            <div className="mobileicon" onClick={() => handleClick()}>
                <img src={icon} alt="" />
                <p>{name}</p>
            </div>
        </a>
    )
}

export default MobileIcon
