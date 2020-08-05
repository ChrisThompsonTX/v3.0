import React from 'react';
// import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './icon.css';

class Icon extends React.Component {

    render() {
        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 5, y: 5 }}
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
                            src="https://tappd-seeds.s3-us-west-1.amazonaws.com/v3/proj.png"
                            draggable="false"
                        />
                    </div>
                    <div> Chicken Tinder </div>
                    <div className="project__links">
                        <a href="https://www.linkedin.com/in/chris-thompson-832015179/">Demo </a>
                        | 
                        <a href="https://www.linkedin.com/in/chris-thompson-832015179/"> GitHub</a>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Icon;