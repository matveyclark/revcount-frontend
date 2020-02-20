import React, { Component } from 'react'
import API from '../API'

export default class NewRevisionModal extends Component {

    createRevision =e => {
        e.preventDefault()
        API.createRevision(e, this.props.selectedProject.id, this.props.username)
    }

    render() {
        console.log(this.props)
        return (
            <div className="modal">
                <div className="modal--element">
                    <h3 className="modal--header">
                        Create a new <span className="highlight">revision <br /> <span role="img" aria-label="checkmark-icon">✅</span></span>
                    </h3>
                    <form onSubmit={this.createRevision} className="modal--form">
                        <textarea name="revision" className="modal--input" type="text"></textarea>
                        <input className="modal--submitbtn" type="submit" value="Add Revision"></input>
                    </form>
                </div>
            </div>
        )
    }
}
