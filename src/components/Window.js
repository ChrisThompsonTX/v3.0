import React from 'react';
import Draggable from 'react-draggable';
import './window.css';

class Window extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        // let { name,  } = this.props
        function handleClose() {
            
        }

        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 20, y: 20 }}
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
                                <i className="fas fa-times"></i>
                                <i className="fas fa-window-minimize"></i>
                                <i class="fas fa-expand-alt"></i>
                            </div>
                            <div className="window__name">
                                my first window
                            </div>
                            {/* <div></div> */}
                        </div>
                    </div>
                    <div className="window__body">
                        sadklfjlkasdjflkajslkf
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Window;