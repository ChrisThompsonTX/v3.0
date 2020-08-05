import React, {useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import './dropdownmenu.css'

function DropdownMenu() {
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

    function DropdownItem(props) {
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

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>About Chris Thompson</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Notable Skills
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<i class="fas fa-folder-open"></i>}
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals">
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
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                    </DropdownItem>
                    <DropdownItem leftIcon={<i class="fab fa-js-square"></i>}>Javascript</DropdownItem>
                    <DropdownItem leftIcon={<i class="fab fa-react"></i>}>React/Redux</DropdownItem>
                    <DropdownItem leftIcon={<i class="fas fa-gem"></i>}>Ruby</DropdownItem>
                    <DropdownItem leftIcon={<i class="fab fa-python"></i>}>Python</DropdownItem>
                    <DropdownItem leftIcon={<i class="fas fa-database"></i>}>SQL/noSQL databases</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>jQuery</DropdownItem>
                    <DropdownItem leftIcon={<i class="fab fa-node"></i>}>Node</DropdownItem>
                    <DropdownItem leftIcon={<i class="fas fa-database"></i>}>MongoDB</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Express</DropdownItem>
                    <DropdownItem leftIcon={<i class="fab fa-aws"></i>}>AWS</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
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
