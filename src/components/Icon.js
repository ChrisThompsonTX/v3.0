import React from 'react';
// import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './icon.css';

class Icon extends React.Component {

    constructor(props) {
        super(props)
    }

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
                        <img 
                            className="project" 
                            alt="project" 
                            src={image}
                            draggable="false"
                            onDoubleClick={null}
                        />
                    </div>
                    <div> {name}</div>
                    <div className="project__links">
                        <a href={demo}>Demo</a>
                        <h1> | </h1>
                        <a href={github}>GitHub</a>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Icon;