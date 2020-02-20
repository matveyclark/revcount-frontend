import React, { Component } from 'react'
import API from '../../API'
import { connect } from 'react-redux'
import RevisionList from '../RevisionList'
import DashboardMenu from '../DashboardMenu'

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
        return (
            <section>
                <div className="dashboard">
                    {/* <div className="dashboard--header"> */}
                        {/* {this.props.projects.length > 0 ? <ProjectPicker projects={this.props.projects} selectProject={this.props.selectProject} selectedProject={this.props.selectedProject} /> : <DashboardError />} */}
                    {/* </div> */}
                    <DashboardMenu projects={this.props.projects} />
                    <RevisionList selectedProject={this.props.selectedProject} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.userReducer.projects,
        selectedProject: state.userReducer.selectedProject
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProjects: projects => {
            dispatch({ type: 'SET_PROJECTS', payload: projects })
        },
        selectProject: project => {
            dispatch({ type: 'SELECT_PROJECT', payload: project })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)