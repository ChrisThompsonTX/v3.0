import React from 'react'
import Dock from "react-osx-dock";
import './osdock.css'

export const OSDock = () => {
    let width = window.innerWidth

    return (
        <div className="dock">
            <Dock 
                backgroundClassName="dock__background" 
                width={width / 3} 
                magnification={1.3} 
                magnifyDirection="up" 
            >
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>About Me</h1>
                    <img alt="About Me" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/finder.png" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>Contact</h1>
                    <img alt="Contact" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/contact.png" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>Linked In</h1>
                    <a href="https://www.linkedin.com/in/chris-thompson-832015179/">
                        <img alt="Linked In" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/linkedin.png" />
                    </a>
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>AngelList</h1>
                    <a href="https://angel.co/u/christopher-thio-thompson">
                        <img alt="AngelList" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/angellist.png" />
                    </a>
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>GitHub</h1>
                    <a href="https://github.com/ChrisThompsonTX">
                        <img alt="GitHub" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/github.png" />
                    </a>
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>My Resume</h1>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vRpvdKt_hooSkI6gwJxHUgWBpVGIW1X9lEM99CrfLY3doCpaxetAwjuFVi5937Qt8Bohv27XBY47V85/pub">
                        <img alt="My Resume" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/resume.png" />
                    </a>
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>Projects</h1>
                    <img alt="Projects" src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/projects.png" />
                </Dock.Item>
            </Dock>
        </div>
    )
}
