import React from 'react'

export default function DashboardWelcome({ username, projects }) {
    return (
        <div className="dashboard--welcome">
            <h1>Welcome to your Project Management dashboard, {username}!</h1>
            {projects.length > 0 
            ? <p>Please select from one of your available projects</p>
            : <p>You dont have any active projects yet. Please get in touch with your Project Manager to receive an invite.</p>}
        </div>
    )
}
