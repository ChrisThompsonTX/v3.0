import React from 'react';
import './mobilehome.css';
import MobileIcon from './MobileIcon';

function MobileHome() {
    return (
        <div className="mobilehome">
            <div className="mobilehome__iconrow">
                <MobileIcon icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/finder.png" name="home" />
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
