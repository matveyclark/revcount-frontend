import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {



    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <Link className="header--logo__link" to="/"><h1 className="header--logo">
                        <span className="highlight">Rev</span>Count
                    </h1></Link>
                    <div className="header--buttons">
                        <Link className="btn btn--register" to={this.props.username ? '/dashboard' : '/register'}>{this.props.username ? 'Dashboard' : 'Register'}</Link>
                        <Link onClick={this.props.logout} className="btn btn--login" to='/login'>{this.props.username ? 'Log Out' : 'Log In'}</Link>
                    </div>
                </header>
            </div>
        )
    }
}