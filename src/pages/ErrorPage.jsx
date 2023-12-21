import React from 'react';
import '../styles/ErrorPage.css';
import Navbar from '../components/Navbar';
import sadPepeImg from '../assets/sad-pepe.png';
import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    return(
        <div className='error-page'>
            <Navbar />
            <div className='main'>
                <div className='left-section'>
                    <img src={sadPepeImg} />
                    <h1>{'<chrisson enwerem />'}</h1>
                </div>
                <div className='right-section'>
                    <h2>{'Oops!'}</h2>
                    <h2>{'An unexpected error occured.'}</h2>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div>
    );
};