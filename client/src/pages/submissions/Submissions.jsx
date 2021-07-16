import React, { useEffect, useState } from 'react'
import './submissions.css'
import axios from 'axios'
import Post from '../../components/post/Post'

export default function Submissions() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('/posts')
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPosts()
        console.log(posts)
    }, [posts])

    return (
        <div className='submissions'>
            <h2 className='title'>Records of all submissions</h2>
            <div className='eachPost'>
                {posts.map((p) => {
                    return <Post id={p._id} post={p} />
                })}
            </div>
        </div>
    )
}
