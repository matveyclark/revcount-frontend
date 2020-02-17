import React, { Component } from 'react'
import ClientRegisterForm from '../components/ClientRegisterForm'
import RegisterRolePicker from '../components/RegisterRolePicker'
import PMRegisterForm from '../components/PMRegisterForm'
import { connect } from 'react-redux'

class RegisterForm extends Component {

    state = {
        isClient: null
    }

    registerProjectManager = () => {
        return this.setState({
            isClient: false
        })
    }

    registerClient = () => {
        return this.setState({
            isClient: true
        })
    }

    render() {
        return (
            <section className="register">
                <div className="wrapper form--wrapper">                    
                    <h1 className="register--title">
                        <span className="highlight">Hey<br /></span> there! <span role="img" aria-label="wave-emoji">🥳</span>
                    </h1>
                    <RegisterRolePicker registerProjectManager={this.registerProjectManager} registerClient={this.registerClient} />
                    {this.state.isClient ? <ClientRegisterForm /> : <PMRegisterForm />}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        starterEmail: state.starterEmail
    }
}

export default connect(mapStateToProps)(RegisterForm)
