import React from 'react';
import './mobileheader.css';
import Clock from './Clock'

function MobileHeader() {
    return (
        <div className="mobileheader">
            <div className="mobileheader__left">
                <Clock />
            </div>
            <div className="mobileheader__right">
                <i class="fas fa-signal"></i>
                <i class="fas fa-wifi"></i>
                <i className="fas fa-battery-full"></i>
            </div>
        </div>
    )
}

export default MobileHeader
