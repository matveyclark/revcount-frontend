import React from 'react'

export default function DashboardWelcome({ username }) {
    return (
        <div className="dashboard--welcome">
            <h1>Welcome to your Project Management dashboard, {username}!</h1>
        </div>
    )
}
