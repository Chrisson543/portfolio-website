import React from 'react';
import '../styles/Projects.css';
import Navbar from '../components/Navbar';
import ProjectView from '../components/ProjectView';
import openingTagLight from '../assets/opening-tag-light.png';
import openingTagDark from '../assets/opening-tag-dark.png';
import closingTagLight from '../assets/closing-tag-light.png';
import closingTagDark from '../assets/closing-tag-dark.png';
import wordleScreenshot from '../assets/wordle-clone-screenshot.png';
import weatherAppScreenshot from '../assets/weather-app-screenshot.png';
import todoAppScreenshot from '../assets/todo-app-screenshot.png';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { darkModeContext } from '../index';

export default function Projects(){
    const [currentProjectInView, setCurrentProjectInView] = React.useState(0);
    const projectsList = [
        {
            title: 'wordle clone',
            image: wordleScreenshot,
            description: "a wordle clone with the added functionality of 'giving up' if you are unable to guess the word.",
            tags: ['react js'],
            link: 'https://wordle-clone-by-chrisson.netlify.app/'
        },
        {
            title: 'weather app',
            image: weatherAppScreenshot,
            description: "a weather app that gets the current location of the user and displays the 3-day weather forecast of their location using a weather api.\n\n you can also search the forecast of other locations.",
            tags: ['react js', 'api'],
            link: 'https://weather-app-by-chrisson.netlify.app/'
        },
        {
            title: 'todo list app',
            image: todoAppScreenshot,
            description: "a todo list app that has the option to add tasks, remove tasks, view task description, update task and mark tasks as completed.",
            tags: ['react js'],
            link: 'https://todo-app-by-chrisson.netlify.app/'
        }
    ]
    const [projectImage, setProjectImage] = React.useState(projectsList[currentProjectInView].image);
    const [projectTitle, setProjectTitle] = React.useState(projectsList[currentProjectInView].title);
    const [projectDescription, setProjectDescription] = React.useState(projectsList[currentProjectInView].description);
    const [projectTags, setProjectTags] = React.useState(projectsList[currentProjectInView].tags);
    const [projectLink, setProjectLink] = React.useState(projectsList[currentProjectInView].link);
    const {toggleThemeFunction, isDarkMode} = React.useContext(darkModeContext);

    
    function nextView(){
        setCurrentProjectInView(prevState => {
            if(prevState < projectsList.length - 1){
                return prevState + 1;
            }
            else{
                return 0;
            }
        });
    };
    function previousView(){
        setCurrentProjectInView(prevState => {
            if(prevState == 0){
                return projectsList.length - 1;
            }
            else{
                return prevState - 1;;
            }
        });
    };

    React.useEffect(() => {
        setProjectImage(projectsList[currentProjectInView].image);
        setProjectTitle(projectsList[currentProjectInView].title);
        setProjectDescription(projectsList[currentProjectInView].description);
        setProjectTags(projectsList[currentProjectInView].tags);
        setProjectLink(projectsList[currentProjectInView].link);
    }, [currentProjectInView]);

    const componentProps = {
        projectImage,
        projectTitle,
        projectDescription,
        projectTags,
        projectLink
    }
    return(
        <div className='projects-page'>
            <Navbar />
            <div className='main'>
                <button onClick={previousView} className='opening-tag-button raise' ><img className='opening-tag-img' src={isDarkMode ? openingTagDark : openingTagLight} /></button>
                <ProjectView {...componentProps}/>
                <button onClick={nextView} className='closing-tag-button raise' ><img className='closing-tag-img' src={isDarkMode ? closingTagDark : closingTagLight} /></button>
            </div>
            <ThemeToggleButton />
        </div>
    );
};