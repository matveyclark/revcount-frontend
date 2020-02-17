import React, { Component } from 'react'
import { connect } from 'react-redux'

class RegisterForm extends Component {
    render() {
        return (
            <section className="register">
                <div className="wrapper">
                    <div className="form--wrapper">
                        <h1 className="register--title">
                            <span className="highlight">Hey</span> there! <span role="img" aria-label="wave-emoji">🥳</span>
                        </h1>
                    </div>
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
