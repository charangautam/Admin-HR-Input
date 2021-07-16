import React, { useEffect, useState } from 'react'
import './submissions.css'
import axios from 'axios'
import dayjs from 'dayjs'
import Navbar from '../../components/navbar/Navbar'
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
    }, [posts])

    const csvString = [
        [
          "First Name",
          "Last Name",
          "UID",
          "Date of Entry",
          "Profession"
        ],
        ...posts.map(post => [
            post.firstName,
            post.lastName,
            post.UID,
            dayjs(post.entryDate).format('DD/MM/YYYY'),
            post.profession
        ])
    ].map(e => e.join(",")).join("\n");

    const exportFile = () => {
        const hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvString);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'user_entries.csv';
        hiddenElement.click();
    }

    return (
        <> 
            <Navbar />
            <div className='submissions'>
                <h2 className='title'>Records of all submissions</h2>
                <div className='eachPost'>
                    {posts.map((p) => {
                        return <Post id={p._id} post={p} />
                    })}
                </div>
                <button className ='downloadButton' onClick={exportFile}>Download</button>
            </div>
        </>
    )
}
