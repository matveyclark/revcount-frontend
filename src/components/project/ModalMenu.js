import React from 'react'
import CreateProjectForm from './CreateProjectForm'
import SendProjectInvite from './SendProjectInvite'
import ModalChoicePicker from './ModalChoicePicker'

export default function ModalMenu({ toggleRegisteredClient, toggleClientNotRegistered, clientIsRegistered, createProject, handleChange }) {

    return (
        <React.Fragment>
            <ModalChoicePicker 
            clientIsRegistered={clientIsRegistered} 
            toggleRegisteredClient={toggleRegisteredClient}
            toggleClientNotRegistered={toggleClientNotRegistered}
             />
            {!clientIsRegistered
            ? <SendProjectInvite />
            : <CreateProjectForm 
            createProject={createProject}
            handleChange={handleChange}  />}
        </React.Fragment>
    )
}
