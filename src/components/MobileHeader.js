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
                {/* Signal */}
                {/* Signal */}
                {/* Battery */}
            </div>
        </div>
    )
}

export default MobileHeader
