import React, { Component } from 'react'

export default class RegisterRolePicker extends Component {
    render() {
        return (
            <div className="role--buttons">
                <button onClick={this.props.registerClient} className="role--pick">I am a Client</button>
                <button onClick={this.props.registerProjectManager} className="role--pick">I am a Project Manager</button>
            </div>
        )
    }
}
