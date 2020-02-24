import React from 'react'
import API from '../../API'

export default class SendProjectInvite extends React.Component {

    state = {
        email: null
    }

    handleChange = e => this.setState({ email: e.target.value })

    sendInvite = e => {
        e.preventDefault()
        return API.inviteClient(this.state.email)
        .then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <form onSubmit={this.sendInvite}>
                <input onChange={this.handleChange} type="text" placeholder="input email" />
                <input onSubmit={this.sendInvite} type="submit"/>
            </form>
        )
    }
}
