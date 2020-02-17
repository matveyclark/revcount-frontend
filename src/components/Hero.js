import React, { Component } from 'react'
import EmailInputForm from '../components/EmailInputForm'

export default class Hero extends Component {
    render() {
        return (
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
                    <p className="hero--list__item">🧠 keep clients informed</p>
                    <p className="hero--list__item">🙌 manage expectations</p>
                    <p className="hero--list__item">💸 leave scrop creep in the past</p>
                    <p className="hero--list__item">📦 easy delivery</p>
                </div>
            </section>
        )
    }
}
