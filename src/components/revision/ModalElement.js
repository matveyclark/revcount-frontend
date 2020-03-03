import React from 'react'

export default function ModalElement({ createRevision, hideModal }) {
    return (
        <div className="modal">
            <div className="modal--element">
                <h3 className="modal--header">
                    Create a new <span className="highlight">revision <br /> </span>
                </h3>
                <form onSubmit={createRevision} className="modal--form">
                    <label htmlFor="revision" className="revision--title__label">Title</label>
                    <input name="revision" className="modal--input" type="text"></input>
                    <label htmlFor="revision--description__label">Content</label>
                    <input type="text" className="modal--input" name="content" />
                    <button className="modal--submitbtn" type="submit" value="Add Revision">Create Revision</button>
                </form>
                <button onClick={hideModal}>Close</button>
            </div>
        </div>
    )
}
