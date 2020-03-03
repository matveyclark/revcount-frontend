import React, { Component } from 'react'
import API from '../../API'
import ModalElement from './ModalElement'

export default class NewRevisionModal extends Component {

    createRevision = e => {
        const { selectedProject, addRevision } = this.props
        e.preventDefault()
        API.createRevision(e, selectedProject.id)
        .then(revision => {
            if(revision.error) throw Error(revision.error)
            addRevision(revision)
        }).catch(error => alert(error))
    }

    render() {
        const { hideModal } = this.props
        return (
            <ModalElement 
            hideModal={hideModal}
            createRevision={this.createRevision} />
        )
    }
}
