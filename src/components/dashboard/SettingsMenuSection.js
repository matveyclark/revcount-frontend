import React from 'react'

export default function SettingsMenuSection({ logout, showModal, userType }) {
    return (
        <div className="dashboard--menu__section">
            <h4 className="dashboard--menu__title">
                Settings
            </h4>
            <ul className="dashboard--section__list">
                <li onClick={logout} className="dashboard--list__item pointer" ><p className="dashboard--menu__link" ><span className="dashboard--link__icon" role="img" aria-label="crying-emoji" >😢</span>Logout</p></li>
                {userType === 'pm' 
                && <li onClick={showModal} className="dashboard--list__item pointer" ><p className="dashboard--menu__link"><span className="dashboard--link__icon" role="img" aria-label="bang-emoji" >💥</span>Create New Project</p></li>}
            </ul>
        </div>
    )
}
