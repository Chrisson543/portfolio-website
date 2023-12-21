import React from 'react';
import '../styles/DropDownMenu.css';
import { Link, useLocation } from 'react-router-dom';

export default function DropDownMenu({dropDownRef, toggleDropdown}){
    const history = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath);

    return(
        <div className='dropdown-menu' ref={dropDownRef}>
            <ul>
                <li className='raise'><Link to={'/'}>{'<HOME />'}</Link></li>
                {currentPath !== '/projects' && <li onClick={toggleDropdown}><Link to={'/projects'}>{'<PROJECTS />'}</Link></li>}
                {currentPath !== '/about-me' && <li onClick={toggleDropdown}><Link to={'/about-me'}>{'<ABOUT ME />'}</Link></li>}
                {currentPath !== '/contact' && <li onClick={toggleDropdown}><Link to={'/contact'}>{'<CONTACT />'}</Link></li>}
            </ul>
        </div>
    );
};