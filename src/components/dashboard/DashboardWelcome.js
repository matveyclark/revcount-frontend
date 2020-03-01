import React from 'react'
import WelcomeProjectList from './WelcomeProjectList'

export default function DashboardWelcome({ username, projects, selectProject }) {

    return (
        <div 
        className="dashboard--welcome">
            <h1 
            className="dashboard--welcome__title">Welcome to your Project Management dashboard, <br /> 
            <span 
            className="highlight">{username}!</span></h1>
            {projects.length > 0 
            ? <p 
            className="dashboard--welcome__select">Please select from one of your available projects: 
            <WelcomeProjectList
            selectProject={selectProject} 
            projects={projects} /> </p>
            : <p className="dashboard--welcome__noprojects">You dont have any active projects yet. Please get in touch with your Project Manager to receive an invite.</p>}
        </div>
    )
}
