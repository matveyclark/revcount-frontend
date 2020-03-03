import React from 'react'
import ProjectFormFields from './ProjectFormFields'

export default function CreateProjectForm({ createProject, handleChange }) {
    return (
        <div>
            <h3 className="modal--header">
                Create a new <span className="highlight">project <br /> </span>
            </h3>
            <ProjectFormFields
            createProject={createProject}
            handleChange={handleChange} />
        </div> 
    )
}
