import React from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Homepage from './pages/homepage';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';


const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/about-me',
        element: <AboutMe />
    },
    {
        path: '/contact',
        element: <Contact />
    }
]);
export const darkModeContext = React.createContext(() => {});

function App(){
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const doc = document.documentElement;

    function toggleThemeFunction(){
        setIsDarkMode(prevState => !prevState);
    };
    doc.style.setProperty('--background-color', isDarkMode ? '#181A20' : '#FFFFFF');
    doc.style.setProperty('--pfp-background-color', isDarkMode ? '#23272F' : '#D3D3D3');
    doc.style.setProperty('--body-font-color', isDarkMode ? 'white' : 'black');
    doc.style.setProperty('--navbar-background-color-dark', isDarkMode ? '#23272F' : 'white');

    return(
        <darkModeContext.Provider value={{toggleThemeFunction, isDarkMode}}>
            <RouterProvider router={router} />
        </darkModeContext.Provider>
    );
};

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);