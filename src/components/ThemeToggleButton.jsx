import React from 'react';
import '../styles/ThemeToggleButton.css';
import { darkModeContext } from '../';
import themeToggleLight from '../assets/theme-toggle-light.svg';
import themeToggleDark from '../assets/theme-toggle-dark.svg';

export default function ThemeToggleButton(){
    const {toggleThemeFunction, isDarkMode} = React.useContext(darkModeContext);
    function buttonClick(){
        toggleThemeFunction();
    };
    return(
        <button className='theme-toggle-button raise' onClick={buttonClick}>
            <img className='theme-toggle-img' src={isDarkMode ? themeToggleDark : themeToggleLight}/>
        </button>
    );
};