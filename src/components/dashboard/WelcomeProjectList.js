import React, { Component } from 'react'

export default class WelcomeProjectList extends Component {

    renderProjects = () => {
        const { projects, selectProject } = this.props
        return projects.map(project => <p onClick={() => selectProject(project)} className="dashboard--welcome__projects"> {project.name} </p> )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderProjects()}
            </React.Fragment>
        )
    }
}
