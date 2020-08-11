import React from 'react';

function DropdownItem(props) {
    let { setActiveMenu } = props

    return (
        <a href="/"
            className="menu-item"
            onClick={(e) => {
                e.preventDefault();
                props.goToMenu && setActiveMenu(props.goToMenu)
            }}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-button icon-right">{props.rightIcon}</span>
        </a>
    );
}

export default DropdownItem;