import React from 'react'
import API from '../../API'

export default class SendProjectInvite extends React.Component {

    state = {
        email: null
    }

    handleChange = e => this.setState({ email: e.target.value })

    sendInvite = e => {
        const { hideModal } = this.props
        const { email } = this.state
        e.preventDefault()
        return API.inviteClient(email)
        .then(hideModal)
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
