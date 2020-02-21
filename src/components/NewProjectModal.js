import React, { Component } from 'react'
import API from '../API'

export default class NewProjectModal extends Component {

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

    render() {
        return (
            <div className="modal">
                <div className="modal--element">
                    <h3 className="modal--header">
                        Create a new <span className="highlight">project <br /> </span>
                    </h3>
                    <form className="modal--form">
                        <label className="modal--label" htmlFor="name">Project name</label>
                        <input onChange={this.handleChange} className="modal--input project" type="text" name="name"/>
                        <label className="modal--label" htmlFor="maxRevisions">Max Revisions</label>
                        <input onChange={this.handleChange} className="modal--input project" type="number" name="maxRevisions" />
                        <label className="modal--label" htmlFor="client">Client e-mail</label>
                        <input onChange={this.handleChange} className="modal--input project" type="text" name="client" />
                        <button className="modal--submitbtn" type="submit" value="Add Revision">Create Project</button>
                    </form>
                    <button onClick={this.props.hideModal}>Close</button>
                </div>
            </div>
        )
    }
}
