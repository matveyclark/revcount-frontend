import React from 'react'

export default function CreateProjectForm({ createProject, handleChange }) {
    return (
        <div>
            <h3 className="modal--header">
                Create a new <span className="highlight">project <br /> </span>
            </h3>
            <form onSubmit={createProject} className="modal--form">
                <label className="modal--label" htmlFor="name">Project name</label>
                <input onChange={handleChange} className="modal--input project" type="text" name="name"/>
                <label className="modal--label" htmlFor="maxRevisions">Max Revisions</label>
                <input onChange={handleChange} className="modal--input project" type="number" name="maxRevisions" />
                <label className="modal--label" htmlFor="email">Client e-mail</label>
                <input onChange={handleChange} className="modal--input project" type="text" name="email" />
                <button className="modal--submitbtn" type="submit" value="Add Revision">Create Project</button>
            </form>
        </div> 
    )
}
