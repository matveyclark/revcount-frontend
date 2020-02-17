import React, { Component } from 'react'

export default class RegisterRolePicker extends Component {
    render() {
        return (
            <div className="role--buttons">
                <button onClick={this.props.registerClient} className={this.props.isClient ? "role--pick role--pick__active" : "role--pick"}>I'm a Client</button>
                <button onClick={this.props.registerProjectManager} className={!this.props.isClient ? "role--pick role--pick__active" : "role--pick"}>I'm a Project Manager</button>
            </div>
        )
    }
}
