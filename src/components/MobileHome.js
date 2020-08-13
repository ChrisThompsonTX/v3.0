import React from 'react';
import './mobilehome.css';
import MobileIcon from './MobileIcon';

function MobileHome() {
    return (
        <div className="mobilehome">
            <div className="mobilehome__iconrow">
                <MobileIcon />
                <MobileIcon />
                <MobileIcon />
                <MobileIcon />
            </div>
            <div className="mobilehome__iconrow">
                <MobileIcon />
                <MobileIcon />
                <MobileIcon />
                <MobileIcon />
            </div>
            <div className="mobilehome__iconrow">
                <MobileIcon />
                <MobileIcon />
                <MobileIcon />
                <MobileIcon />
            </div>
            <div className="mobilehome__iconrow">
                <MobileIcon />
                <MobileIcon />
                <MobileIcon />
                <MobileIcon />
            </div>
        </div>
    )
}

export default MobileHome
