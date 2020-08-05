import React from 'react'
import Dock from "react-osx-dock";
import './dock.css'

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
                    <img src="https://blog.macsales.com/wp-content/uploads/2017/12/finder-icon.png" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <h1>My Resume</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d9/Pages_Icon.png" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <img src="src/icons/aquarium.jpg" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <img src="src/icons/aquarium.jpg" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <img src="src/icons/aquarium.jpg" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <img src="src/icons/aquarium.jpg" />
                </Dock.Item>
                <Dock.Item className="dock__icon" onClick={() => null}>
                    <img src="src/icons/aquarium.jpg" />
                </Dock.Item>
            </Dock>
        </div>
    )
}
