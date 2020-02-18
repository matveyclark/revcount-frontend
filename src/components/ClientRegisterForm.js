import React, { Component } from 'react'
import API from '../API'

export default class ClientRegisterForm extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null
    }

    componentDidMount() {
        if(this.props.starterEmail) {
            this.setState({
                ...this.state,
                email: this.props.starterEmail
            })
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        return this.setState({
            [name]: value
        })
    }

    createClient = e => {
        e.preventDefault()
        API.registerClient(this.state)
        .then(data => {
            if(data.error) throw Error(data.error)
            this.props.login(data.data.email, data.user_type)
            localStorage.token = data.token
        }).catch(error => alert(error))
    }

    render() {
        return (
            <form onSubmit={this.createClient} className="register--form">
                <label htmlFor="firstName" className="login--label">first name</label>
                <input onChange={this.handleChange} name="firstName" type="text" className="login--input"/>
                <label htmlFor="lastName" className="login--label">last name</label>
                <input onChange={this.handleChange} name="lastName" type="text" className="login--input"/>
                <label htmlFor="email" className="login--label">email</label>
                <input onChange={this.handleChange} name="email" type="text" className="login--input" value={this.props.starterEmail ? this.props.starterEmail : null} />
                <label htmlFor="password" className="login--label">password</label>
                <input onChange={this.handleChange} name="password" type="password" className="login--input"/>
                <button className="login--input login--input__submit btn btn--register" type="submit">Register</button>
            </form>
        )
    }
}