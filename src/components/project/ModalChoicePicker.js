import React from 'react'

export default function ModalChoicePicker({ toggleRegisteredClient, toggleClientNotRegistered, clientIsRegistered }) {
    return (
        <div className="modal--menu">
            <div onClick={toggleClientNotRegistered} className="modal--menu__register">
                <h1 className={!clientIsRegistered 
                ? "menu--send__invite modal--menu__active"
                : "menu--send__invite" }>
                    Client not yet registered? Send an invite. <br /> <span role="img" aria-label="mail-emoji">📩</span>
                </h1>
            </div>
            <div onClick={toggleRegisteredClient} className="modal--menu__create--project">
                <h1 className={clientIsRegistered 
                ? "menu--send__invite modal--menu__active"
                : "menu--send__invite"}>
                    Client already has an account? Create project.
                    <br /> <span role="img" aria-label="mail-emoji">🤘</span>
                </h1>
            </div>
        </div>
    )
}
