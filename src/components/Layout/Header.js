import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="wrapper">
            <header className="header">
                <Link className="header--logo__link" to="/"><h1 className="header--logo">
                    <span className="highlight">Rev</span>Count
                </h1></Link>
                <div className="header--buttons">
                    <Link className="btn btn--register" to='/register'>Register</Link>
                    <Link className="btn btn--login" to='/login'>Log In</Link>
                </div>
            </header>
        </div>
    )
}