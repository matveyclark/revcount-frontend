import React, { Component } from 'react'

export default class Dashboard extends Component {

    componentDidMount() {
        if(this.props.username === null) {
            this.props.history.push('/login')
        }
    }

    render() {
        console.log(this.props.username)
        return (
            <div>
                <h1>This is the user dashboard</h1>
            </div>
        )
    }
}
