import React, { Component } from 'react'
import NewProjectModal from '../project/NewProjectModal'
import MainMenuSection from './MainMenuSection'
import SettingsMenuSection from './SettingsMenuSection'
import ProjectListItem from './ProjectListItem'

export default class DashboardMenu extends Component {

    state = {
        viewProjects: false,
        showModal: false
    }

    viewProjects = () => this.setState({ viewProjects: !this.state.viewProjects })

    renderProjects = () => {
        const { projects, selectProject } = this.props
        const { viewProjects } = this.state
        if(viewProjects === true) {
            return projects.map(project => {
                return <ProjectListItem 
                selectProject={selectProject}
                project={project} />
            })
        }
    }

    showModal = () => this.setState({ showModal: true })

    hideModal = () => this.setState({ showModal: false })

    render() {
        const { logout, clearProject, userType } = this.props
        const { showModal } = this.state
        const { viewProjects, renderProjects } = this
        return (
            <div className="dashboard--menu">
                <MainMenuSection 
                clearProject={clearProject}
                viewProjects={viewProjects}
                renderProjects={renderProjects} />
                <SettingsMenuSection
                logout={logout}
                showModal={showModal}
                userType={userType} />
                {showModal 
                && <NewProjectModal 
                hideModal={this.hideModal} />}
            </div>
        )
    }
}
