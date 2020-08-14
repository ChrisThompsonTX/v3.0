import React from 'react';
import './mobiledock.css';

import MobileIcon from './MobileIcon';

function MobileDock({setOpen}) {


    return (
        <div className="mobiledock">
            <MobileIcon 
                icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/about_mobile.png" 
                name="About Me" 
                onClick={setOpen}
                />
            <MobileIcon 
                icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/contact_mobile.png" 
                name="Contact" 
                />
            <MobileIcon 
                icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/resume_mobile.png" 
                name="Resume" 
                />
            <MobileIcon 
                icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/projects_mobile.png" 
                name="Projects" 
                />
        </div>
    )
}

export default MobileDock


