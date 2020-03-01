import React, { Component } from '../../../node_modules/react'
import API from '../../API'
import { connect } from '../../../node_modules/react-redux'
import RevisionList from '../revision/RevisionList'
import DashboardMenu from '../dashboard/DashboardMenu'
import DashboardWelcome from '../dashboard/DashboardWelcome'

class Dashboard extends Component {

    componentDidMount() {
        if(this.props.username === null) {
            return this.props.history.push('/login')
        } else {
            return API.getProjects()
            .then(data => {
                this.props.setProjects(data.data)
            })
        }
    }

    render() {
        const { logout, projects, selectProject, selectedProject, history, username, clearProject, userType } = this.props
        return (
            <section>
                <div className="dashboard">
                    <DashboardMenu 
                    logout={logout} 
                    projects={projects}
                    clearProject={clearProject} 
                    selectProject={selectProject}
                    userType={userType} />
                    {selectedProject 
                    ? <RevisionList
                    history={history}
                    selectedProject={selectedProject} />
                    : <DashboardWelcome
                    selectProject={selectProject}
                    projects={projects} 
                    username={username} />}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projectReducer.projects,
        selectedProject: state.projectReducer.selectedProject,
        username: state.userReducer.username,
        userType: state.userReducer.userType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProjects: projects => {
            dispatch({ type: 'SET_PROJECTS', payload: projects })
        },
        selectProject: project => {
            dispatch({ type: 'SELECT_PROJECT', payload: project })
            dispatch({ type: 'CLEAR_REVISION' })
        },
        clearProject: () => {
            dispatch({ type: 'CLEAR_PROJECT' })
        },
        logout: () => {
            dispatch({ type: "LOGOUT_USER" })
            localStorage.clear()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)