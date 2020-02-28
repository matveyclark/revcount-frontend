import React, { Component } from 'react'
import API from '../../API'

export default class CommentInput extends Component {

    state = {
        content: null,
        screenShot: null
    }

    handleChange = e => {
        return this.setState({ content: e.target.value })
    }

    handleImageUpload = e => {
        return this.setState({ screenShot: e.target.files[0] })
    }

    createComment = e => {
        const { content, screenShot } = this.state
        const { addComment, username, revision } = this.props
        e.preventDefault()
        return API.createNewComment(content, username, revision, screenShot)
        .then(data => {
            let comment = {
                content: data.data,
                user: data.user,
                user_type: data.user_type,
                screenshot: data.screenshot,
                screenshotUrl: data.screenshot_url
            }
            if(data.error) throw Error(data.error)
            addComment(comment)
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

            <form>
                <input onChange={this.handleImageUpload} name="screenshot" id="screenshot" type="file"/>
            </form>
            </div>
        )
    }
}
