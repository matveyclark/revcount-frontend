import React, { Component } from '../../../node_modules/react'
import { connect } from '../../../node_modules/react-redux'
import ModalMenu from './ModalMenu'
import API from '../../API'

class NewProjectModal extends Component {

    state = {
        name: null,
        maxRevisions: null,
        email: null,
        clientIsRegistered: false
    }

    handleChange = e => {
        const { name, value } = e.target
        return this.setState({ [name]: value })
    }

    createProject = e => {
        const { createProject, hideModal } = this.props
        e.preventDefault()
        return API.createNewProject(this.state)
        .then(data => {
            if(data.error) throw Error(data.error)
            createProject(data.project)
            hideModal()
        }).catch(error => alert(error))
    }

    toggleRegisteredClient = () => {
        return this.setState({ clientIsRegistered: true })
    }

    toggleClientNotRegistered = () => this.setState({ clientIsRegistered: false })

    render() {
        const { hideModal } = this.props
        const { clientIsRegistered } = this.state
        return (
            <div className="modal">
                <div className="modal--element">
                <ModalMenu
                toggleRegisteredClient={this.toggleRegisteredClient}
                toggleClientNotRegistered={this.toggleClientNotRegistered}
                createProject={this.createProject}
                clientIsRegistered={clientIsRegistered}
                handleChange={this.handleChange}
                hideModal={hideModal}
                 />
                    <button onClick={hideModal}>Close</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => {
            dispatch({ type: "ADD_PROJECT", payload: project })
        }
    }
}

export default connect(null, mapDispatchToProps)(NewProjectModal)
