import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';
import pepeImg from '../assets/pepe.png';
import ThemeToggleButton from '../components/ThemeToggleButton';

export default function Homepage(){
    const titleText = '<Chrisson />'
    const [title, setTitle] = React.useState('');

    function typing(){
        for(let i = 1; i < titleText.length + 1; i++){ 
            setTimeout(() => {
                    setTitle(titleText.substring(0, i));
            }, i * 100);
        }
    };

    React.useEffect(() => {
        typing();
    }, []);

    return(
        <div className='homepage'>
            <div className='header'>
                <h1 className='title'>{title}</h1>
            </div>
            <div className='sections'>
                <div className='left-section'>
                    <div className='container'>
                        <p className='subtitle'>{'<Programmer />'}</p>
                        <nav>
                            <ul className='menu-options'>
                                <li className='raise'><Link to={'/projects'}>{'<Projects />'}</Link></li>
                                <li className='raise'><Link to={'/about-me'}>{'<About me />'}</Link></li>
                                <li className='raise'><Link to={'/contact'}>{'<Contact />'}</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='right-section'>
                    <img src={pepeImg} />
                </div>
            </div>
            <ThemeToggleButton />
        </div>
    );
};