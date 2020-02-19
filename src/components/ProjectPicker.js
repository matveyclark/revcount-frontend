import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectPicker extends Component {

    renderProjects = () => {
        return this.props.projects.map(project => <Link className="dropdown--option" onClick={() => this.props.selectProject(project)}>{project.name}</Link>)
    }

    render() {
        return (
            <div className="available--projects">
                <p className="dropdown">{this.props.selectedProject ? `${this.props.selectedProject.name}` : 'Select Project 💯'}</p>
                <div className="dropdown-options">
                    {this.renderProjects()}
                </div>
            </div>
        )
    }
}
