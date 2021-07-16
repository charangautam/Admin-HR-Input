import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'


export default function Navbar() {
    
    const handleClick = (e) => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className='navbarContainer'>
            <div className="navbarLeft">
                <img className='logoImg' src={logo} alt="logo" />
                <span className="logo">Sportal</span>
            </div>

            <div className="navbarCenter">
                <Link className='prevSubs'>
                   Previous Submissions
                </Link>
            </div>

            <div className="navbarRight">
                <button className='logoutButton' onClick={handleClick}>Log out </button>
            </div>
        </div>
    )
}
