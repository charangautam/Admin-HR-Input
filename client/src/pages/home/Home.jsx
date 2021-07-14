import React from 'react'
import './home.css'


export default function Home() {
    const handleClick = () => {
        localStorage.clear()
    }

    return (
        <div className='home'>
            <button className='logoutButton' onClick={handleClick}>Log out </button>
            <div className="homeWrapper">
                <div className="homeTop">
                    <span className='userHome'>Welcome, Chris Paul. Conquer the day!</span>
                </div>
                <div className='homeBottom'>
                    <form className='dashboard'>
                        <input 
                            className='dashboardItem'
                            type="text" 
                            placeholder='First Name'
                        />
                        <input 
                            className='dashboardItem'
                            type="text" 
                            placeholder='Last Name'
                        />
                        <input 
                            className='dashboardItem'
                            type="text" 
                            placeholder='UID'
                        />
                        <input 
                            className='dashboardItem'
                            type="date" 
                            placeholder='Date of Record Entry'
                        />
                        <input 
                            className='dashboardItem'
                            type="text" 
                            placeholder='Profession'
                        />
                        <button className='dashboardButton'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
