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
                    <img alt="About Me" src="https://blog.macsales.com/wp-content/uploads/2017/12/finder-icon.png" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>Contact</h1>
                    <img alt="Contact" src="https://help.apple.com/assets/5E1912FB094622053019F704/5E1912FE094622053019F70B/en_US/1f4e0e9e95c469bc9791de151707635a.png" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>Linked In</h1>
                    <a href="https://www.linkedin.com/in/chris-thompson-832015179/">
                        <img alt="Linked In" src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png" />
                    </a>
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>AngelList</h1>
                    <a href="https://angel.co/u/christopher-thio-thompson">
                        <img alt="AngelList" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/69-angellist-512.png" />
                    </a>
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>GitHub</h1>
                    <a href="https://github.com/ChrisThompsonTX">
                        <img alt="GitHub" src="https://lh3.googleusercontent.com/proxy/S-CUjFJKwW6lUkfREefec1qmvLp17LTtG4gazrDaAAhFkivnMBuVnN29ltADbPqpHC_6mSp5MVnYPM4mBdO5MNcLjn8_udQ68l7aDcRd_OmS1DCLbrjGt0QVgMcS6JHTVoCjZiA2J4yIU4JrQ8_q0o2nU71WWfk4fBo61hPsPcUu_U8cxaBS-fPXgVcOR0gqgk8" />
                    </a>
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>My Resume</h1>
                    <img alt="My Resume" src="https://upload.wikimedia.org/wikipedia/en/d/d9/Pages_Icon.png" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>Projects</h1>
                    <img alt="Projects" src="https://blog.macsales.com/wp-content/uploads/2017/04/Folder-Apps-icon.png" />
                </Dock.Item>
            </Dock>
        </div>
    )
}
