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
            <React.Fragment>
                <h3 className="modal--header">Send an <span className="highlight">e-mail</span></h3>
                <form onSubmit={this.sendInvite}>
                    <input className="send--email__input" onChange={this.handleChange} type="text" placeholder="input email" /> <br />
                    <input className="modal--submitbtn" onSubmit={this.sendInvite} value="send e-mail" type="submit"/>
                </form>
            </React.Fragment>
        )
    }
}
