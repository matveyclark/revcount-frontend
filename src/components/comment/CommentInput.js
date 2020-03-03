import React, { Component } from 'react'
import API from '../../API'
import CommentInputForm from './CommentInputForm'

export default class CommentInput extends Component {

    state = {
        content: null,
        screenShot: null
    }

    handleChange = e => this.setState({ content: e.target.value })

    handleImageUpload = e => this.setState({ screenShot: e.target.files[0] })

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
                screenshot_url: data.screenshot_url
            }
            if(data.error) throw Error(data.error)
            addComment(comment)
        }).catch(error => alert(error))
    }

    render() {
        const { handleChange, handleImageUpload, createComment } = this
        return (
           <React.Fragment>
                <CommentInputForm
                handleChange={handleChange}
                handleImageUpload={handleImageUpload}
                createComment={createComment} />
           </React.Fragment>
        )
    }
}
