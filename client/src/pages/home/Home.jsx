import React, { useContext, useRef } from 'react'
import './home.css'
import { AuthContext } from '../../contextAPI/AuthContext'
import axios from 'axios'
import Navbar from '../../components/Navbar'


export default function Home() {
    const { user } = useContext(AuthContext)
    const firstName = useRef()
    const lastName = useRef()
    const UID = useRef()
    const entryDate = useRef()
    const profession = useRef()

    const handleSubmit = async (e) => {
        const post = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            UID: UID.current.value,
            entryDate: entryDate.current.value,
            profession: profession.current.value
        }
        try {
            await axios.post('/posts', post)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Navbar />
            <div className='home'>
                <div className="homeWrapper">
                    <div className="homeTop">
                        <span className='userHome'>Welcome {user.username}. Conquer the day!</span>
                    </div>
                    <div className='homeBottom'>
                        <form className='dashboard' onSubmit={handleSubmit}>
                            <input 
                                className='dashboardItem'
                                type="text" 
                                placeholder='First Name'
                                ref={firstName}
                            />
                            <input 
                                className='dashboardItem'
                                type="text" 
                                placeholder='Last Name'
                                ref={lastName}
                            />
                            <input 
                                className='dashboardItem'
                                type="text" 
                                placeholder='UID'
                                ref={UID}
                            />
                            <input 
                                className='dashboardItem'
                                type="date" 
                                placeholder='Date of Record Entry'
                                ref={entryDate}
                            />
                            <input 
                                className='dashboardItem'
                                type="text" 
                                placeholder='Profession'
                                ref={profession}
                            />
                            <button className='dashboardButton' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
