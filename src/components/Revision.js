import React, { Component } from 'react'

export default class Revision extends Component {
    render() {
        const { revision, selectRevision } = this.props
        return (
            <div onClick={() => selectRevision(revision)} className="revision" >
                <p className="revision--info">{revision.description}</p>
                <p className="revision--info">{revision.created_at}</p>
                <p className="revision--info">{revision.updated_at}</p>
                <p className={revision.status === 'completed' ? "revision--info revision--info__completed" : "revision--info revision--info__working"}>{revision.status}</p>
            </div>
        )
    }
}
