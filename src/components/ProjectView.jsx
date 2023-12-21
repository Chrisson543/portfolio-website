import React from 'react';
import '../styles/ProjectView.css';

export default function ProjectView({projectImage, projectTitle, projectDescription, projectLink, projectTags}){
    const tagsElements = projectTags.map(tag => {
        return(
            <p key={tag}>{tag}</p>
        )
    });

    return(
        <div className='project-view'>
            <div className='left-section'>
                    <img src={projectImage} />
            </div>
            <div className='right-section'>
                <div className='project-description'>
                    <h1 className='project-title'>{`<${projectTitle} />`}</h1>
                    <p className='project-description-text'>{projectDescription}</p>
                    <div className='project-tags'>
                        {tagsElements}
                    </div>
                    <a href={projectLink} target='_blank'><button className='visit-project-button raise'>VISIT</button></a>
                </div>
            </div>
        </div>
    );
};