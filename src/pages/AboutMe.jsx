import React from 'react';
import '../styles/AboutMe.css';
import Navbar from '../components/Navbar';
import pepeImg from '../assets/pepe.png';
import ThemeToggleButton from '../components/ThemeToggleButton';

export default function AboutMe(){
    return(
        <div className='about-me-page'>
            <Navbar />
            <div className='main'>
                <div className='left-section'>
                    <img src={pepeImg} />
                    <h1>{'<chrisson enwerem />'}</h1>
                </div>
                <div className='right-section'>
                    <h2>{'<about me />'}</h2>
                    <p>I&apos;m Chrisson Enwerem, a mechatronics engineering undergraduate; who is an enthusiastic, passionate, innovative front-end developer with strong abilities in ReactJS and Python Programming Language. Eager to leverage my technical skills, and engineering background, to contribute to dynamic Information technology projects, and the ever-changing world of technology; as well as gain real-world experience. Seeking a challenging and collaborative role that allows me to apply my coding expertise and learn from experienced professionals in the industry.</p>
                    <h2>{'<skills />'}</h2>
                    <ul>
                        <li>Proficiency in Python Programming Language</li>
                        <li>Proficiency in ReactJS</li>
                        <li>Proficiency in HTML and CSS</li>
                        <li>Proficiency in Microsoft office</li>
                        <li>Problem-solving, team-working and team-building skills</li>
                        <li>Excellent written and verbal communication skills in English (Native Language)</li>
                        <li>Interpersonal, writing and communication skills</li>
                    </ul>
                    
                </div>
            </div>
            <ThemeToggleButton />
        </div>
    );
};