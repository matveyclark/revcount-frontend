import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from '../API'

class NewProjectModal extends Component {

    state = {
        name: null,
        maxRevisions: null,
        email: null
    }

    handleChange = e => {
        const { name, value } = e.target
        return this.setState({
            [name]: value
        })
    }

    createProject = e => {
        e.preventDefault()
        return API.createNewProject(this.state)
        .then(data => {
            console.log(data)
            if(data.error) throw Error(data.error)
            this.props.createProject(data.project)
            this.props.hideModal()
        }).catch(error => alert(error))
    }

    render() {
        return (
            <div className="modal">
                <div className="modal--element">
                    <h3 className="modal--header">
                        Create a new <span className="highlight">project <br /> </span>
                    </h3>
                    <form onSubmit={this.createProject} className="modal--form">
                        <label className="modal--label" htmlFor="name">Project name</label>
                        <input onChange={this.handleChange} className="modal--input project" type="text" name="name"/>
                        <label className="modal--label" htmlFor="maxRevisions">Max Revisions</label>
                        <input onChange={this.handleChange} className="modal--input project" type="number" name="maxRevisions" />
                        <label className="modal--label" htmlFor="email">Client e-mail</label>
                        <input onChange={this.handleChange} className="modal--input project" type="text" name="email" />
                        <button className="modal--submitbtn" type="submit" value="Add Revision">Create Project</button>
                    </form>
                    <button onClick={this.props.hideModal}>Close</button>
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
