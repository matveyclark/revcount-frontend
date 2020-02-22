import React, { Component } from 'react'

export default class Revision extends Component {
    render() {
        return (
            <div onClick={() => this.props.selectRevision(this.props.revision)} className="revision" >
                <p className="revision--info">{this.props.revision.description}</p>
                <p className="revision--info">{this.props.revision.created_at}</p>
                <p className="revision--info">{this.props.revision.updated_at}</p>
                <p className={this.props.revision.status === 'completed' ? "revision--info revision--info__completed" : "revision--info revision--info__working"}>{this.props.revision.status}</p>
            </div>
        )
    }
}
