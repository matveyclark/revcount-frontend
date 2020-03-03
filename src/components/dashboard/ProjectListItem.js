import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectListItem({ selectProject, project }) {
    return (
        <li onClick={() => { selectProject(project) }} 
                className="dashboard--list__item" >
                <Link className="dashboard--menu__link dashboard--menu__project">
            <span className="dashboard--link__icon" role="img" aria-label="hands-emoji" >🧠</span>{project.name}</Link></li>
    )
}
