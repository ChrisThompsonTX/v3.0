import React, {useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import './dropdownmenu.css'

import DropdownItem from './DropdownItem'

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    

    useEffect(() => {
        setMenuHeight(dropdownRef.current ?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem onClick={() => props.setOpen("About Me")}>About Chris Thompson</DropdownItem>
                    <DropdownItem 
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                        setActiveMenu={setActiveMenu}
                    >
                        Notable Skills
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<i className="fas fa-folder-open"></i>}
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                        setActiveMenu={setActiveMenu}
                        >
                        Recent Projects
                        </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem 
                        goToMenu="main" 
                        leftIcon={<ArrowIcon />}
                        setActiveMenu={setActiveMenu}
                    >
                    </DropdownItem>
                    <DropdownItem leftIcon={<i className="fab fa-js-square"></i>}>Javascript</DropdownItem>
                    <DropdownItem leftIcon={<i className="fab fa-react"></i>}>React/Redux</DropdownItem>
                    <DropdownItem leftIcon={<i className="fas fa-gem"></i>}>Ruby</DropdownItem>
                    <DropdownItem leftIcon={<i className="fab fa-python"></i>}>Python</DropdownItem>
                    <DropdownItem leftIcon={<i className="fas fa-database"></i>}>SQL/noSQL databases</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>jQuery</DropdownItem>
                    <DropdownItem leftIcon={<i className="fab fa-node"></i>}>Node</DropdownItem>
                    <DropdownItem leftIcon={<i className="fas fa-database"></i>}>MongoDB</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Express</DropdownItem>
                    <DropdownItem leftIcon={<i className="fab fa-aws"></i>}>AWS</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem 
                        goToMenu="main" 
                        leftIcon={<ArrowIcon />}
                        setActiveMenu={setActiveMenu}
                    >
                    </DropdownItem>
                    <DropdownItem leftIcon="🐔">Chicken Tinder</DropdownItem>
                    <DropdownItem leftIcon="🍻">Tappd</DropdownItem>
                    <DropdownItem leftIcon="🔍">Wiki-Clicker</DropdownItem>
                    <DropdownItem leftIcon="🎨">Amity-Lianne</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;
