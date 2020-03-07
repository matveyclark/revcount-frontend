import React from 'react'

export default function Revision({ revision, selectRevision, projectID }) {
    return (
        <div onClick={() => selectRevision(revision)} className="revision" >
            <p className="revision--info">{revision.description}</p>
            <p className="revision--info">{revision.created_at}</p>
            <p className="revision--info">{revision.updated_at}</p>
            <p className={revision.status === 'completed' 
            ? "revision--info revision--info__completed" 
            : "revision--info revision--info__working"}>{revision.status}</p>
        </div>
    )
}
