import React, { Component } from '../../../node_modules/react'
import RegisterRolePicker from './RegisterRolePicker'
import UserRegisterForm from './UserRegisterForm'
import { connect } from '../../../node_modules/react-redux'

class RegisterForm extends Component {

    state = {
        isClient: true
    }

    registerProjectManager = () => this.setState({ isClient: false })

    registerClient = () => this.setState({ isClient: true })

    render() {
        const { history, starterEmail, login } = this.props
        const { isClient } = this.state
        const { registerClient, registerProjectManager } = this
        return (
            <section className="register">
                <div className="wrapper">
                    <div className="form--wrapper">                 
                        <h1 className="register--title">
                            <span className="highlight">Hey<br /></span> there! <span role="img" aria-label="wave-emoji">🥳</span>
                        </h1>
                        <RegisterRolePicker 
                        registerProjectManager={registerProjectManager} 
                        registerClient={registerClient} 
                        isClient={isClient} />
                        <UserRegisterForm 
                        history={history} 
                        starterEmail={starterEmail} 
                        login={login} 
                        isClient={isClient} />
                    </div>
                </div>   
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        starterEmail: state.userReducer.starterEmail
    }
}

export default connect(mapStateToProps)(RegisterForm)
