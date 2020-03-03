import React, { Component } from '../../../node_modules/react'
import API from '../../API'
import UserLoginForm from './UserLoginForm'

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
        const { handleChange, handleSubmit } = this
        return (
            <section className="login">
                <div className="wrapper">
                    <div className="form--wrapper">
                        <h1 className="login--title">
                        <span className="highlight">Welcome<br /> </span>Back!<span className="login--wave__icon" role="img" aria-label="wave-emoji">👋</span> </h1>
                        <UserLoginForm 
                        handleChange={handleChange}
                        handleSubmit={handleSubmit} />
                    </div>
                </div>
            </section>
        )
    }
}