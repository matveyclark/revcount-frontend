import React, { Component } from 'react'

export default class EmailInputForm extends Component {

    state = {
        email: ''
    }

    render() {
        return (
            <form className="email-form">
                <input className="email-input" type="text" placeholder="Input your email address" />
                <input className="btn btn--register btn--register__email" type="submit" value="Get Started 🤘"></input>
            </form>
        )
    }
}
