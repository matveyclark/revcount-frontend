import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardError() {
    return (
        <div className="dashboard--error" >
            <h1 className="dashboard--error__title" >Oh, <span className="highlight">no!</span> <span className="error-emoji" role="img" aria-label="thinking emoji icon">🤔</span></h1>
            <h3 className="dashboard--error__subtitle" >It seems like you dont have any projects yet. <br /> Please contact your Project Manager in order to be added to a project.</h3>
            <Link className="error--btn" to="/">Back</Link>
        </div>
    )
}
