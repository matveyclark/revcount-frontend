import React, { Component } from 'react'
import Comment from './Comment'
import API from '../API'

export default class RevisionInfo extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        API.getRevisionComments(this.props.selectedRevision.id)
        .then(data => {
            this.setState({ 
                comments: data.comments
            })
        })
    }

    renderComments = () => {
        return this.state.comments.map(comment => <Comment comment={comment} /> )
    }

    render() {
        return (
            <div>
                <h1 className="revision--info__title">{this.props.selectedRevision.description}</h1>
                <p className="revision--info__content">{this.props.selectedRevision.content}</p>
                <h1>Comments: </h1>
                {this.renderComments()}
            </div>
        )
    }
}
