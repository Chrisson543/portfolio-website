import React from 'react';
import '../styles/Navbar.css';
import { darkModeContext } from '../';
import hamburgerMenuDark from '../assets/hamburger-menu-dark.svg';
import hamburgerMenuLight from '../assets/hamburger-menu-light.svg';
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

export default function Navbar(){
    const {toggleThemeFunction, isDarkMode} = React.useContext(darkModeContext);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [dropDownMenuStyle, setDropdownMenuStyle] = React.useState({});
    const dropDownRef = React.useRef(null);
    const hamburgerMenuRef = React.useRef(null);
    
    function toggleDropdown(){
        setShowDropdown(prevState => !prevState);
    };
    function handleResize(){
        if(document.documentElement.clientWidth > 1071){
            setShowDropdown(false);
        };
    };
    const handleClickOutside = (event) => {
        if(dropDownRef.current && !(dropDownRef.current.contains(event.target) || hamburgerMenuRef.current.contains(event.target))){
            toggleDropdown();
        }
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousedown', handleClickOutside);

        return() => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    
    return(
        <div className='navbar-container'>
            <nav className='navbar'>
                <div className='left-section'>
                    <Link to={'/'} className='raise title'>{'<CHRISSON />'}</Link>
                </div>
                <div className='right-section'>
                    <button ref={hamburgerMenuRef} onClick={toggleDropdown} className='hamburger-menu raise'><img src={isDarkMode ? hamburgerMenuDark : hamburgerMenuLight} /></button>
                    <ul>
                        <li className='raise'><Link to={'/projects'}>{'<PROJECTS />'}</Link></li>
                        <li className='raise'><Link to={'/about-me'}>{'<ABOUT ME />'}</Link></li>
                        <li className='raise'><Link to={'/contact'}>{'<CONTACT />'}</Link></li>
                    </ul>
                </div>
            </nav>
            {showDropdown && <DropDownMenu dropDownRef={dropDownRef} style={dropDownMenuStyle} toggleDropdown={toggleDropdown}/>}
        </div>
    );
};