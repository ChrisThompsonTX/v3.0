import React from 'react';
import './mobiledock.css';

import MobileIcon from './MobileIcon';

function MobileDock({setOpen, open}) {


    return (
        <div className="mobiledock">
            <MobileIcon 
                icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/about_mobile.png" 
                name="About Me" 
                setOpen={setOpen}
                open={open}
                />
            <MobileIcon 
                icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/contact_mobile.png" 
                name="Contact" 
                setOpen={setOpen}
                open={open}
                />
            <MobileIcon 
                icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/resume_mobile.png" 
                name="Resume" 
                setOpen={setOpen}
                open={open}
                />
            <MobileIcon 
                icon="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/projects_mobile.png" 
                name="Projects" 
                setOpen={setOpen}
                open={open}
                />
        </div>
    )
}

export default MobileDock


