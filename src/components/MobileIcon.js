import React from 'react';
import './mobileicon.css';

function MobileIcon({ icon, name, onClick, link }) {
    return (
        <a className="mobileicon__link" href={link} >
            <div className="mobileicon" onClick={ onClick ? () => onClick() : null}>
                <img src={icon} alt="" />
                <p>{name}</p>
            </div>
        </a>
    )
}

export default MobileIcon
