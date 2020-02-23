import React, { Component } from 'react'
import API from '../../API'

export default class CommentInput extends Component {

    state = {
        content: null
    }

    handleChange = e => {
        return this.setState({ content: e.target.value })
    }

    createComment = e => {
        const { content } = this.state
        const { addComment, username, revision } = this.props
        e.preventDefault()
        return API.createNewComment(content, username, revision)
        .then(data => {
            if(data.error) throw Error(data.error)
            addComment(data.data)
        }).catch(error => alert(error))
    }

    render() {
        return (
            <div className="comment--input">
                <input 
                onChange={this.handleChange} 
                type="text" 
                name="content" 
                className="comment--input__field" 
                placeholder="Leave your comment here..." />

                <button 
                onClick={this.createComment} 
                type="submit" 
                className="post--comment__btn">Post Comment</button>
            </div>
        )
    }
}
