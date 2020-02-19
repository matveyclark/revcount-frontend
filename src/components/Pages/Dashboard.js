import React, { Component } from 'react'
import API from '../../API'
import { connect } from 'react-redux'
import ProjectPicker from '../ProjectPicker'

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
                        <ProjectPicker projects={this.props.projects} selectProject={this.props.selectProject} selectedProject={this.props.selectedProject} />
                    </div>
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