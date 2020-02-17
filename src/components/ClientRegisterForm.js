import React, { Component } from 'react'

export default class ClientRegisterForm extends Component {
    render() {
        return (
            <form className="register--form">
                <label htmlFor="firstName" className="login--label">first name</label>
                <input name="firstName" type="text" className="login--input"/>
                <label htmlFor="lastName" className="login--label">last name</label>
                <input name="lastName" type="text" className="login--input"/>
                <label htmlFor="email" className="login--label">email</label>
                <input name="email" type="text" className="login--input" value={this.props.starterEmail ? this.props.starterEmail : null} />
                <label htmlFor="password" className="login--label">password</label>
                <input name="password" type="text" className="login--input"/>
                <button className="login--input login--input__submit btn btn--register" type="submit">Register</button>
            </form>
        )
    }
}
