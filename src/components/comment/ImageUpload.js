import React from 'react'

export default function ImageUpload({ handleImageUpload }) {
    return (
        <form>
            <input onChange={handleImageUpload} name="screenshot" id="screenshot" type="file"/>
        </form>
    )
}
