import React from 'react';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { darkModeContext } from '../';
import pepeImg from '../assets/pepe.png';
import emailIconDark from '../assets/email-icon-dark.svg';
import emailIconLight from '../assets/email-icon-light.svg';
import linkedinIconDark from '../assets/linkedin-icon-dark.svg';
import linkedinIconLight from '../assets/linkedin-icon-light.svg';
import githubIconDark from '../assets/github-icon-dark.svg';
import githubIconLight from '../assets/github-icon-light.svg';

export default function Contact(){
    const {toggleThemeFunction, isDarkMode} = React.useContext(darkModeContext);

    return(
        <div className='contact-page'>
            <Navbar />
            <div className='main'>
                <div className='left-section'>
                    <img src={pepeImg} />
                    <h1>{'<chrisson enwerem />'}</h1>
                </div>
                <div className='right-section'>
                    <h2>{'<contact />'}</h2>
                    <ul>
                        <li className='raise'><img src={isDarkMode ? emailIconDark : emailIconLight}/><a href='mailto:chrisson543@gmail.com' target='_blank'>email: chrisson543@gmail.com</a></li>
                        <li className='raise'><img src={isDarkMode ? linkedinIconDark :  linkedinIconLight} /><a href='https://www.linkedin.com/in/chrisson-enwerem-323261118/' target='_blank'>linkedin:chrisson enwerem</a></li>
                        <li className='raise'><img src={isDarkMode ? githubIconDark : githubIconLight} /><a href='https://github.com/Chrisson543' target='_blank'>github: Chrisson543</a></li>
                    </ul>
                    
                </div>
            </div>
            <ThemeToggleButton />
        </div>
    );
};