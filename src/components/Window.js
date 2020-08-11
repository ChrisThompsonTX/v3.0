import React from 'react';
import Draggable from 'react-draggable';
import './window.css';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';

class Window extends React.Component {

    render() {

        let { open, closeWindow } = this.props
        if (!open) return null;

        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 120, y: -300 }}
                position={null}
                grid={[1, 1]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className="window">
                    <div className="handle">
                        <div className="window__top">
                            <div className="window__buttons">
                                <div onClick={closeWindow} className="window__close">
                                    <i className="fas fa-times fa-xs"></i>
                                </div>
                                <div className="window__minimize">
                                    <i className="fas fa-window-minimize fa-xs"></i>
                                </div>
                                <div className="window__expand">
                                    <i className="fas fa-expand-alt fa-xs"></i>
                                </div>
                            </div>
                            <div className="window__name">{open}</div>
                        </div>
                    </div>
                    <div className="window__body">
                        {open === "About Me" ? <AboutMe /> : null}
                        {open === "Contact" ? <Contact /> : null}
                        {open === "Projects" ? <Projects /> : null}
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Window;