import React, { Component } from 'react'
import { connect } from 'react-redux'

class EmailInputForm extends Component {
    render() {
        const { saveEmail, getStarterEmail } = this.props
        return (
            <form onSubmit={saveEmail} className="email-form">
                <input onChange={getStarterEmail} className="email-input" type="text" name="email" placeholder="Input your email address" />
                <input className="btn btn--register btn--register__email" type="submit" value="Get Started 🤘"></input>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveEmail: e => {
            e.preventDefault()
            dispatch({ type: 'ADD_STARTER_EMAIL', payload: e.target.email.value })
            ownProps.history.push('/register')
        }
    }
}

export default connect(null, mapDispatchToProps)(EmailInputForm)