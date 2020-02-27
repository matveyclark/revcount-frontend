import React, { Component } from 'react'
import ProjectRevisions from '../project/ProjectRevisions'
import NewRevisionModal from './NewRevisionModal'
import API from '../../API'

export default class RevisionList extends Component {

    state = {
        revisions: [],
        showModal: false
    }

    componentDidMount() {
        if(this.props.selectedProject) {
            API.getSingleProject(this.props.selectedProject.id)
            .then(data => this.setState({ revisions: data.data }))
        }
    }

    showModal = () => this.setState({ showModal: true })

    hideModal = () => this.setState({ showModal: false })

    addRevision = revision => {
        return this.setState({
            ...this.state,
            revisions: [...this.state.revisions, revision],
            showModal: false
        })
    }

    render() {
        const { revisions, showModal } = this.state
        const { selectedProject } = this.props
        return (
            <React.Fragment>
                <ProjectRevisions 
                revisions={revisions} 
                selectedProject={selectedProject} 
                showModal={showModal}
                showingModal={this.showModal} />

                {showModal 
                && <NewRevisionModal 
                hideModal={this.hideModal} 
                addRevision={this.addRevision} 
                selectedProject={selectedProject} />}
            </React.Fragment>
        )
    }
}