import React, { Component } from '../../../node_modules/react'
import downArrow from '../../images/scroll-down-icon.svg'

export default class About extends Component {
    render() {
        return (
            <section className="about-section">
                <div className="wrapper">
                    <h1 className="about--title">About</h1>
                    <div className="about--scroll">
                        <p className="about--scroll__text">Scroll Down</p>
                        <img className="about--scroll__icon" src={downArrow} alt="down-icon" />
                    </div>
                </div>
            </section>
        )
    }
}
