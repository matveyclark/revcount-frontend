import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>This is the user dashboard</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.userReducer.username,
        userType: state.userReducer.userType
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
