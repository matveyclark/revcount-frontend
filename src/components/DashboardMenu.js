import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DashboardMenu extends Component {

    state = {
        viewProjects: false
    }

    viewProjects = () => {
        return this.setState({
            viewProjects: !this.state.viewProjects
        })
    }

    renderProjects = () => {
        if(this.state.viewProjects === true) {
            return this.props.projects.map(project => {
                return <li onClick={() => {this.props.selectProject(project)}} className="dashboard--list__item" ><Link className="dashboard--menu__link dashboard--menu__project"><span className="dashboard--link__icon" role="img" aria-label="hands-emoji" >🧠</span>{project.name}</Link></li>
            })
        }
    }

    render() {
        return (
            <div className="dashboard--menu">
                <div className="dashboard--menu__section">
                    <h4 className="dashboard--menu__title">
                        Main menu
                    </h4>
                    <ul className="dashboard--section__list">
                        <li className="dashboard--list__item" ><Link className="dashboard--menu__link" to='/dashboard'><span className="dashboard--link__icon" role="img" aria-label="house-emoji" >🏠</span>Dashboard</Link></li>
                        <li onClick={this.viewProjects} className="dashboard--list__item dashboard--menu__link" ><span className="dashboard--link__icon" role="img" aria-label="hands-emoji" >🙌</span>My projects</li>
                        {this.renderProjects()}
                    </ul>
                </div>
                <div className="dashboard--menu__section">
                    <h4 className="dashboard--menu__title">
                        Settings
                    </h4>
                    <ul className="dashboard--section__list">
                        <li className="dashboard--list__item" ><Link className="dashboard--menu__link" ><span className="dashboard--link__icon" role="img" aria-label="crying-emoji" >😢</span>Logout</Link></li>
                        <li className="dashboard--list__item" ><Link className="dashboard--menu__link"><span className="dashboard--link__icon" role="img" aria-label="bang-emoji" >💥</span>Create New Project</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
