import React from 'react'

export default function Comment({ comment }) {
    return (
        <div className="comment--box">
            <div className="comment--box__header">

            </div>
            <p>{comment.content}</p>
            <p>{comment.user}</p>
        </div>
    )
}

