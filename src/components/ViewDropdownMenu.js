import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
// import { ReactComponent as CogIcon } from '../icons/cog.svg';
// import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import './viewdropdownmenu.css'

// import DropdownItem from './DropdownItem'

function ViewDropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);


    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <div className="view__dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                </div>
            </CSSTransition>
        </div>
    );
}

export default ViewDropdownMenu;
