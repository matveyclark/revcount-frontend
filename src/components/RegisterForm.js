import React, { Component } from 'react'
import ClientRegisterForm from '../components/ClientRegisterForm'
import RegisterRolePicker from '../components/RegisterRolePicker'
import PMRegisterForm from '../components/PMRegisterForm'
import { connect } from 'react-redux'

class RegisterForm extends Component {

    state = {
        isClient: true
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
        console.log(this.props)
        return (
            <section className="register">
                <div className="wrapper">
                    <div className="form--wrapper">                 
                        <h1 className="register--title">
                            <span className="highlight">Hey<br /></span> there! <span role="img" aria-label="wave-emoji">🥳</span>
                        </h1>
                        <RegisterRolePicker registerProjectManager={this.registerProjectManager} registerClient={this.registerClient} isClient={this.state.isClient} />
                        {this.state.isClient ? <ClientRegisterForm starterEmail={this.props.starterEmail} login={this.props.login} /> : <PMRegisterForm starterEmail={this.props.starterEmail} login={this.props.login} />}
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
