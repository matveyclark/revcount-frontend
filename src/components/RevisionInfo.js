import React, { Component } from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'
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

    addComment = comment => {
        return this.setState({
            comments: [...this.state.comments, comment]
        })
    }

    renderComments = () => {
        return this.state.comments.map(comment => <Comment comment={comment} /> )
    }

    render() {
        return (
            <div className="revision--info__box">
                <h1 className="revision--info__title">{this.props.selectedRevision.description}</h1>
                <p className="revision--info__content">{this.props.selectedRevision.content}</p>
                <h1 className="comments--header">Comments: </h1>
                {this.state.comments.length > 0 ? this.renderComments() : <p className="no-comments--messsage">Nobody has left a comment yet...</p> }
                <CommentInput addComment={this.addComment} username={this.props.username} revision={this.props.revision} />
            </div>
        )
    }
}
