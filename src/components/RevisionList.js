import React, { Component } from 'react'
import API from '../API'

export default class RevisionList extends Component {

    state = {
        revisions: []
    }

    componentDidMount() {
        if(this.props.selectedProject) {
            API.getSingleProject(this.props.selectedProject.id)
            .then(data => {
                return this.setState({ revisions: data.data })
            })
        }
    }

    renderRevisions = () => {
        return this.state.revisions.map(revision => <li>{revision.description}</li>)
    }

    render() {
        return (
            <ul className="revision-list">
                {this.state.revisions.length > 0 && this.renderRevisions()}
            </ul>
        )
    }
}
