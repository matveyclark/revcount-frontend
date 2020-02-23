import React, { Component } from 'react'

export default class RegisterRolePicker extends Component {
    render() {
        const { registerClient, loginClient, isClient, registerProjectManager, loginPM } = this.props
        return (
            <div className="role--buttons">
                <button onClick={registerClient ? registerClient : loginClient } className={isClient ? "role--pick role--pick__active" : "role--pick"}>I'm a Client</button>
                <button onClick={registerProjectManager ? registerProjectManager : loginPM} className={!isClient ? "role--pick role--pick__active" : "role--pick"}>I'm a Project Manager</button>
            </div>
        )
    }
}
