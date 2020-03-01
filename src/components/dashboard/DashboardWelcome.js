import React from 'react'

export default function DashboardWelcome({ username, projects }) {

    return (
        <div className="dashboard--welcome">
            <h1 className="dashboard--welcome__title">Welcome to your Project Management dashboard, <br /> <span className="highlight">{username}!</span></h1>
            {projects.length > 0 
            ? <p className="dashboard--welcome__select">Please select from one of your available projects: {projects.map(project => <p className="dashboard--welcome__projects">{project.name}</p>)}</p>
            : <p>You dont have any active projects yet. Please get in touch with your Project Manager to receive an invite.</p>}
        </div>
    )
}
