import React, { Component } from 'react'
import API from '../API'

export default class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        const { login, history } = this.props
        e.preventDefault()
        API.login(this.state)
        .then(data => {
            if(data.error) throw Error(data.error)
            login(data.user, data.user_type)
            localStorage.token = data.token
            history.push('/dashboard')
        }).catch(error => alert(error))
    }

    handleChange = e => {
        const { name, value } = e.target
        return this.setState({ [name]: value })
    }

    render() {
        return (
            <section className="login">
                <div className="wrapper">
                    <div className="form--wrapper">
                        <h1 className="login--title"><span className="highlight">Welcome<br /> </span>Back!<span className="login--wave__icon" role="img" aria-label="wave-emoji">👋</span> </h1>
                        <form onSubmit={this.handleSubmit} className="login--form">
                            <label className="login--label" htmlFor="email">Email address</label>
                            <input onChange={this.handleChange} type="text" name="email" className="login--input"/>
                            <label className="login--label" htmlFor="password">Password</label>
                            <input onChange={this.handleChange} type="password" name="password" className="login--input"/>
                            <button className="login--input login--input__submit btn btn--register" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}