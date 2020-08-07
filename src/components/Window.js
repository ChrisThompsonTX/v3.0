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
                defaultPosition={{ x: 120, y: -220 }}
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
                                <div className="window__close">
                                    <i className="fas fa-times fa-xs"></i>
                                </div>
                                <div className="window__minimize">
                                    <i className="fas fa-window-minimize fa-xs"></i>
                                </div>
                                <div className="window__expand">
                                    <i class="fas fa-expand-alt fa-xs"></i>
                                </div>
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