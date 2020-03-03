import React from 'react'

export default function MainMenuSection({ clearProject, viewProjects, renderProjects }) {
    return (
        <div className="dashboard--menu__section">
            <h4 className="dashboard--menu__title">
                Main menu
            </h4>
            <ul className="dashboard--section__list">
                <li onClick={clearProject} className="dashboard--list__item" ><p className="dashboard--menu__link" to='/dashboard'><span className="dashboard--link__icon" role="img" aria-label="house-emoji" >🏠</span>Dashboard</p></li>
                <li onClick={viewProjects} className="dashboard--list__item dashboard--menu__link projects--menu--link" ><span className="dashboard--link__icon" role="img" aria-label="hands-emoji" >🙌</span>My projects</li>
                {renderProjects()}
            </ul>
        </div>
    )
}
