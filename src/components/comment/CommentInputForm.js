import React from 'react'
import ImageUpload from './ImageUpload'

export default function CommentInputForm({ handleChange, createComment, handleImageUpload }) {
    return (
        <form className="comment--input">
            <input 
            onChange={handleChange} 
            type="text" 
            name="content"
            required='required' 
            className="comment--input__field" 
            placeholder="Leave your comment here..." />

            <button 
            onClick={createComment} 
            type="submit" 
            className="post--comment__btn">Post Comment</button>

            <ImageUpload 
            handleImageUpload={handleImageUpload} />
        </form>
    )
}
