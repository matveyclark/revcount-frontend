import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="wrapper">
            <header className="header">
                <h1 className="header--logo">
                    <span className="highlight">Rev</span>Count
                </h1>
                <div className="header--buttons">
                    <Link className="btn btn--register" to='#'>Register</Link>
                    <Link className="btn btn--login" to='#'>Log In</Link>
                </div>
            </header>
        </div>
    )
}