import React from 'react';
import './mobilehome.css';
import MobileIcon from './MobileIcon';

function MobileHome() {
    return (
        <div className="mobilehome">
            <div className="mobilehome__iconrow">
                <MobileIcon 
                    icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/github_mobile.png" 
                    name="GitHub" 
                    />
                <MobileIcon 
                    icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/linkedin.png" 
                    name="LinkedIn" 
                    />
                <MobileIcon 
                    icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/angellist_mobile.png" 
                    name="Angellist" 
                    />
                <MobileIcon 
                    icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/leetcode_mobile.png" 
                    name="Leetcode" 
                    />
            </div>
            <div className="mobilehome__iconrow">
            </div>
            <div className="mobilehome__iconrow">
            </div>
            <div className="mobilehome__iconrow">
            </div>
        </div>
    )
}

export default MobileHome
