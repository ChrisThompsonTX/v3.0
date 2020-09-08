import React from 'react'
import Dock from "react-osx-dock";
import './osdock.css'

class OSDock extends React.Component {

    render() {
        let {open, setOpen} = this.props
        
        return (
            <div className="dock">
                <Dock 
                    backgroundClassName="dock__background" 
                    width={600} 
                    magnification={1.3} 
                    magnifyDirection="up" 
                >
                    <Dock.Item className="dock__icon" onClick={() => open ? setOpen(false) : setOpen("About Me")}>
                        <h1>About Me</h1>
                        <img draggable="false" alt="About Me" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/finder.png" />
                    </Dock.Item>
                    <Dock.Item className="dock__icon" onClick={() => open ? setOpen(false) : setOpen("Contact")}>
                        <h1>Contact</h1>
                        <img draggable="false" alt="Contact" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/contact.png" />
                    </Dock.Item>
                    <Dock.Item className="dock__icon" onClick={() => null}>
                        <h1>Linked In</h1>
                        <a href="https://www.linkedin.com/in/chris-thompson-832015179/" rel="noopener noreferrer" target="_blank">
                            <img draggable="false" alt="Linked In" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/linkedin_online.png" />
                        </a>
                    </Dock.Item>
                    <Dock.Item className="dock__icon" onClick={() => null}>
                        <h1>AngelList</h1>
                        <a href="https://angel.co/u/christopher-thio-thompson" target="_blank" rel="noopener noreferrer" >
                            <img draggable="false" alt="AngelList" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/angellist_online.png" />
                        </a>
                    </Dock.Item>
                    <Dock.Item className="dock__icon" onClick={() => null}>
                        <h1>GitHub</h1>
                        <a href="https://github.com/ChrisThompsonTX" target="_blank" rel="noopener noreferrer" >
                            <img draggable="false" alt="GitHub" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/git_online.png" />
                        </a>
                    </Dock.Item>
                    <Dock.Item className="dock__icon" onClick={() => null}>
                        <h1>My Resume</h1>
                        <a href="https://docs.google.com/document/d/e/2PACX-1vRpvdKt_hooSkI6gwJxHUgWBpVGIW1X9lEM99CrfLY3doCpaxetAwjuFVi5937Qt8Bohv27XBY47V85/pub" target="_blank" rel="noopener noreferrer" >
                            <img draggable="false" alt="My Resume" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/resume_online.png" />
                        </a>
                    </Dock.Item>
                    <Dock.Item className="dock__icon" onClick={() => open ? setOpen(false) : setOpen("Projects")}>
                        <h1>Projects</h1>
                        <img draggable="false" alt="Projects" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/projects.png" />
                    </Dock.Item>
                </Dock>
            </div>
        )
    }
}

export default OSDock;
