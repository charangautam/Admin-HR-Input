import React from 'react'
import './post.css'
import dayjs from 'dayjs'
import axios from 'axios'

export default function Post({ post }) {
    const date = dayjs(post.entryDate).format('DD/MM/YYYY')

    const handleClick = () => {
        try {
            axios.delete('/posts/' + post._id)
        } catch (err) {
            console.log(err)
        }
        window.location.reload()
    }

    return (
        <> 
            <div className='post'>
                <div className="postWrapper">
                    <div className="postContainer">
                        <div className="postItem">
                            <h4 className='label'>First Name:</h4>
                            <span>{post.firstName}</span>
                        </div>
                        <div className="postItem">
                            <h4 className='label'>Last Name:</h4>
                            <span>{post.lastName}</span>
                        </div>
                        <div className="postItem">
                            <h4 className='label'>UID:</h4>
                            <span>{post.UID}</span>
                        </div>
                        <div className="postItem">
                            <h4 className='label'>Date of Entry:</h4>
                            <span>{date}</span>
                        </div>
                        <div className="postItem">
                            <h4 className='label'>Profession:</h4>
                            <span>{post.profession}</span>
                        </div>
                    </div>
                    <button className='deletePostButton' onClick={handleClick}>X</button>
                </div>
            </div>
        </>
    )
}
