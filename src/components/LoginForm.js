import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from '../API'

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        API.login(this.state)
        .then(data => {
            if(data.error) throw Error(data.error)
            this.props.login(data.user)
            localStorage.token = data.token
        }).catch(error => alert(error))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <section className="login">
                <div className="wrapper">
                    <div className="form--wrapper">
                        <h1 className="login--title">Log In</h1>
                        <p className="login--subtext">
                            Welcome back <span role="img" aria-label="wave-emoji">👋</span><br /> Login and start revising!
                        </p>
                        <form onSubmit={this.handleSubmit} className="login--form">
                            <label className="login--label" htmlFor="email">Email address</label>
                            <input onChange={this.handleChange} type="text" name="email" className="login--input"/>
                            <label className="login--label" htmlFor="password">Password</label>
                            <input onChange={this.handleChange} type="password" name="password" className="login--input"/>
                            <input className="login--input login--input__submit" type="submit" value="Log In" />
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: username => {
            dispatch({ type: 'LOGIN_USER', payload: username })
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)