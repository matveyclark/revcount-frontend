import React, { Component } from 'react'
import About from './About'
import EmailInputForm from './EmailInputForm'

export default class Homepage extends Component {

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
                    
                    <EmailInputForm />
                    <div className="hero--list">
                        <p className="hero--list__item"><span role="img" aria-label="brain-emoji">🧠</span> keep clients informed </p>
                        <p className="hero--list__item"><span role="img" aria-label="hands-emoji">🙌</span> manage expectations</p>
                        <p className="hero--list__item"><span role="img" aria-label="cash-emoji">💸</span> leave scope creep in the past</p>
                        <p className="hero--list__item"><span role="img" aria-label="package-emoji">📦</span> easy delivery</p>
                    </div>
                    </div>
                </section>
                <About />
            </div>
        )
    }
}

