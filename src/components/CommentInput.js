import React, { Component } from 'react'
import API from '../API'

export default class CommentInput extends Component {

    state = {
        content: null
    }

    handleChange = e => {
        return this.setState({
            content: e.target.value
        })
    }

    createComment = e => {
        e.preventDefault()
        return API.createNewComment(this.state.content, this.props.username, this.props.revision)
        .then(data => {
            if(data.error) throw Error(data.error)
            this.props.addComment(data.data)
        }).catch(error => alert(error))
    }

    render() {
        console.log(this.props)
        return (
            <div className="comment--input">
                <input onChange={this.handleChange} type="text" name="content" className="comment--input__field" placeholder="Leave your comment here..." />
                <button onClick={this.createComment} type="submit" className="post--comment__btn">Post Comment</button>
            </div>
        )
    }
}
