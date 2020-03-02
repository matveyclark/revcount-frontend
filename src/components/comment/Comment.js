import React from 'react'

export default function Comment({ comment }) {
    return (
        <div className={comment.user_type === 'pm'
        ? "comment--box comment--box__pm"
        : "comment--box comment--box__client"}>
            <div className="comment--box__header">
                <p className={comment.user_type === 'client' 
                ? "comment--header__user client--comment" 
                : "comment--header__user pm--comment"} >{comment.user}</p>
            </div>
            <div className="comment--body">
                <p className="comment--content" >{comment.content}</p>
                {comment.screenshot && <p> <a href={comment.screenshot_url && comment.screenshot_url} target="_blank" rel="noopener noreferrer">Screenshot attached</a></p>}
            </div>
        </div>
    )
}

