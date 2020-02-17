import React, { Component } from 'react'
import About from './About'
import { connect } from 'react-redux'
import EmailInputForm from './EmailInputForm'
import API from '../API'

class Homepage extends Component {


    componentDidMount() {
        if(localStorage.token) {
            API.validate(this.props.username)
            .then(data => {
                if(data.error) throw Error(data.error)
                this.props.login(data.email)
            }).catch(error => alert(error))
        }
    }


    render() {
        return (
            <div className="main-container">
                <section className="hero">
                    <div className="wrapper">
                        <h1 className="hero--title">
                            Keep your digital projects <span className="highlight">within scope</span> and clients informed.
                        </h1>
                        <p className="hero--subtitle">
                            A better and more visual way of managing your clients' expectaions about project revisions
                        </p>
                    </div>
                    <EmailInputForm />
                    <div className="hero--list">
                        <p className="hero--list__item"><span role="img" aria-label="brain-emoji">🧠</span> keep clients informed </p>
                        <p className="hero--list__item"><span role="img" aria-label="hands-emoji">🙌</span> manage expectations</p>
                        <p className="hero--list__item"><span role="img" aria-label="cash-emoji">💸</span> leave scrop creep in the past</p>
                        <p className="hero--list__item"><span role="img" aria-label="package-emoji">📦</span> easy delivery</p>
                    </div>
                </section>
                <About />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: username => {
            dispatch({ type: 'LOGIN_USER', payload: username })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
