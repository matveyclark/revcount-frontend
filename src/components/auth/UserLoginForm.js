import React from 'react'

export default function UserLoginForm({ handleChange, handleSubmit }) {
    return (
        <form 
        onSubmit={handleSubmit} className="login--form">
            <label className="login--label" htmlFor="email">Email address</label>
            <input 
            onChange={handleChange} type="text" name="email" className="login--input"/>
            <label className="login--label" htmlFor="password">Password</label>
            <input 
            onChange={handleChange} type="password" name="password" className="login--input"/>
            <button className="login--input login--input__submit btn btn--register" type="submit">Log In</button>
        </form>
    )
}

