import React, { Component } from 'react'
import Comment from '../comment/Comment'
import CommentInput from '../comment/CommentInput'
import API from '../../API'

export default class RevisionInfo extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        API.getRevisionComments(this.props.selectedRevision.id)
        .then(data => this.setState({ comments: data.comments }))
    }

    addComment = comment => this.setState({ comments: [...this.state.comments, comment] })

    renderComments = () => this.state.comments.map(comment => <Comment comment={comment} /> )

    completeRevision = () => {
        return API.markAsComplete(this.props.selectedRevision.id)
        .then(data => {
            if(data.error) throw Error(data.error)
            console.log(data)
        }).catch(error => alert(error))
    }

    render() {
        const { selectedRevision, username, revision } = this.props
        const { comments } = this.state
        return (
            <div className="revision--info__box">
                <h1 
                className="revision--info__title">
                {selectedRevision.description}</h1>
                <p 
                className="revision--info__content">
                {selectedRevision.content}</p>
                <h1 
                className="comments--header">
                Comments: </h1>
                {comments.length > 0 
                ? 
                <div 
                className="comment--section">
                    {this.renderComments()}
                </div> 
                : <p 
                className="no-comments--messsage">
                Nobody has left a comment yet...</p> }
                <CommentInput 
                addComment={this.addComment} 
                username={username} revision={revision} />
                <button onClick={this.completeRevision} className="compelte--revision--btn">Mark as complete</button>
            </div>
        )
    }
}
