import React, { Component } from '../../../node_modules/react'
import EmailInputForm from '../layout/EmailInputForm'
import HeroList from '../layout/HeroList'
import HeroTitles from '../layout/HeroTitles'

export default class Homepage extends Component {

    render() {
        const { history } = this.props
        return (
            <div className="main-container">
                <section className="hero">
                    <div className="wrapper">
                        <HeroTitles />
                        <EmailInputForm history={history} />
                        <HeroList />
                    </div>
                </section>
            </div>
        )
    }
}

