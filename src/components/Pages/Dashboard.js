import React, { Component } from 'react'
import API from '../../API'
import { connect } from 'react-redux'
import ProjectPicker from '../ProjectPicker'
import RevisionList from '../RevisionList'
import { Link } from 'react-router-dom'

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
        console.log(this.props)
        return (
            <section className="dashboard">
                <div className="wrapper">
                    <div className="dashboard--header">
                        {this.props.projects.length > 0 ? <ProjectPicker projects={this.props.projects} selectProject={this.props.selectProject} selectedProject={this.props.selectedProject} /> : <div className="dashboard--error" >
                            <h1 className="dashboard--error__title" >Oh, <span className="highlight">no!</span> <span className="error-emoji" role="img" aria-label="thinking emoji icon">🤔</span></h1>
                            <h3 className="dashboard--error__subtitle" >It seems like you dont have any projects yet. <br /> Please contact your Project Manager in order to be added to a project.</h3>
                            <Link className="error--btn" to="/">Back</Link>
                        </div>}
                    </div>
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