import React, { Component } from 'react'
import ProjectRevisions from './ProjectRevisions'
import NewRevisionModal from './NewRevisionModal'
import API from '../API'

export default class RevisionList extends Component {

    state = {
        revisions: [],
        showModal: false
    }

    componentDidMount() {
        if(this.props.selectedProject) {
            API.getSingleProject(this.props.selectedProject.id)
            .then(data => {
                return this.setState({ revisions: data.data })
            })
        }
    }

    showModal = () => {
        return this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        return this.setState({
            showModal: false
        })
    }

    addRevision = revision => {
        return this.setState({
            ...this.state,
            revisions: [...this.state.revisions, revision],
            showModal: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <ProjectRevisions revisions={this.state.revisions} selectedProject={this.props.selectedProject} showModal={this.state.showModal} showingModal={this.showModal} />
                {this.state.showModal && <NewRevisionModal hideModal={this.hideModal} addRevision={this.addRevision} selectedProject={this.props.selectedProject} />}
            </React.Fragment>
        )
    }
}