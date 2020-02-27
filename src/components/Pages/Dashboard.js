import React, { Component } from '../../../node_modules/react'
import API from '../../API'
import { connect } from '../../../node_modules/react-redux'
import RevisionList from '../revision/RevisionList'
import DashboardMenu from '../dashboard/DashboardMenu'

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
        const { logout, projects, selectProject, selectedProject, history } = this.props
        return (
            <section>
                <div className="dashboard">
                    <DashboardMenu 
                    logout={logout} 
                    projects={projects} 
                    selectProject={selectProject} />
                    <RevisionList
                    history={history}
                    selectedProject={selectedProject} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projectReducer.projects,
        selectedProject: state.projectReducer.selectedProject
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
        logout: () => {
            dispatch({ type: "LOGOUT_USER" })
            localStorage.clear()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)