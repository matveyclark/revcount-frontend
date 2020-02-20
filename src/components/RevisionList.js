import React, { Component } from 'react'
import ProjectRevisions from './ProjectRevisions'
import NewRevisionModal from './NewRevisionModal'
import API from '../API'

export default class RevisionList extends Component {

    state = {
        revisions: [],
        createNewRevision: false
    }

    componentDidMount() {
        if(this.props.selectedProject) {
            API.getSingleProject(this.props.selectedProject.id)
            .then(data => {
                return this.setState({ revisions: data.data })
            })
        }
    }

    createNewRevision = () => {
        return this.setState({
            createNewRevision: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <ProjectRevisions revisions={this.state.revisions} selectedProject={this.props.selectedProject} createNewRevision={this.state.createNewRevision} createRevision={this.createNewRevision} />
                {this.state.createNewRevision && <NewRevisionModal selectedProject={this.props.selectedProject} />}
            </React.Fragment>
        )
    }
}