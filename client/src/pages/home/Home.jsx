import React, { useContext, useRef } from 'react'
import './home.css'
import { AuthContext } from '../../contextAPI/AuthContext'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
    const { user } = useContext(AuthContext)
    const firstName = useRef()
    const lastName = useRef()
    const UID = useRef()
    const entryDate = useRef()
    const profession = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const post = {
            userId: user._id,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            UID: UID.current.value,
            entryDate: entryDate.current.value,
            profession: profession.current.value
        }
        try {
            await axios.post('/posts', post)
            toast.success('Submission successful')

            firstName.current.value = ''
            lastName.current.value = ''
            UID.current.value = ''
            entryDate.current.value = ''
            profession.current.value = ''
        } catch (err) {
            console.log(err)
        }
        
    }

    return (
        <>
            <Navbar />
            <div className='home'>
                <ToastContainer />
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
                                required
                                ref={firstName}
                            />
                            <input 
                                className='dashboardItem'
                                type="text" 
                                placeholder='Last Name'
                                required
                                ref={lastName}
                            />
                            <input 
                                className='dashboardItem'
                                type="text" 
                                placeholder='UID'
                                required
                                ref={UID}
                            />
                            <input 
                                className='dashboardItem'
                                type="date" 
                                placeholder='Date of Record Entry'
                                required
                                ref={entryDate}
                            />
                            <input 
                                className='dashboardItem'
                                type="text" 
                                placeholder='Profession'
                                required
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
