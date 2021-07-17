import React, { useContext, useEffect, useState } from 'react'
import './submissions.css'
import { AuthContext } from '../../contextAPI/AuthContext'
import axios from 'axios'
import dayjs from 'dayjs'
import Navbar from '../../components/navbar/Navbar'
import Post from '../../components/post/Post'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export default function Submissions() {
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('/posts/' + user._id)
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPosts()
    }, [user._id])

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
                { !!posts.length ?
                    <button className ='downloadButton' onClick={exportFile}>
                        Download <CloudDownloadIcon className='downloadIcon'/>
                    </button> 
                    : <h4 className='noPosts'>No submissions have been made</h4>
                }
            </div>
        </>
    )
}
