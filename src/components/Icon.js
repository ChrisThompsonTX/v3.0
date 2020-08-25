import React from 'react';
// import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './icon.css';

class Icon extends React.Component {

    render() {

        let { defaultPosition, name, image, demo, github } = this.props

        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={defaultPosition}
                position={null}
                grid={[1, 1]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className="icon">
                    <div className="handle">
                        <div className="icon__imgcontainer">
                            <img 
                                className="project" 
                                alt="project" 
                                src={image}
                                draggable="false"
                                onDoubleClick={null}
                            />
                        </div>
                    </div>
                    <div> {name}</div>
                    <div className="project__links">
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="button-3d">Demo</a>
                        <h1>  |  </h1>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="button-3d">GitHub</a>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Icon;