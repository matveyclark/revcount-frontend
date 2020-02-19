import React, { Component } from 'react'
import API from '../../API'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProjectPicker from '../ProjectPicker'

class Dashboard extends Component {

    state = {
        selectedProject: null
    }

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

    selectProject = e => {
        e.preventDefault()
        return this.setState({
            selectedProject: e.target.textContent
        })
    }

    render() {
        console.log(this.props)
        return (
            <section className="dashboard">
                <div className="wrapper">
                    <div className="dashboard--header">
                        <ProjectPicker projects={this.props.projects} selectProject={this.selectProject} selectedProject={this.state.selectedProject} />
                        <button className="create--project">Create project</button>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.userReducer.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProjects: projects => {
            dispatch({ type: 'SET_PROJECTS', payload: projects})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)