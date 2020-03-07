import React from 'react'

export default function ProjectFormFields({ createProject, handleChange }) {
    return (
        <form onSubmit={createProject} className="modal--form">
            <label className="modal--label" htmlFor="name">Project name</label>
            <input onChange={handleChange} className="modal--input project" required='required' type="text" name="name"/>
            <label className="modal--label" htmlFor="maxRevisions">Max Revisions</label>
            <input onChange={handleChange} className="modal--input project" type="number" required='required' name="maxRevisions" />
            <label className="modal--label" htmlFor="email">Client e-mail</label>
            <input onChange={handleChange} className="modal--input project" type="text" name="email" />
            <button className="modal--submitbtn" type="submit" value="Add Revision">Create Project</button>
        </form>
    )
}
