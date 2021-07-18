import React from 'react'
import './navbar.css'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../images/logo.jpg'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloudDoneIcon from '@material-ui/icons/CloudDone';


export default function Navbar() {
    const history = useHistory()
    
    const handleClick = (e) => {
        localStorage.clear()
        history.push('/')
        window.location.reload()
    }

    return (
        <div className='navbarContainer'>
            <Link to='/home' className="navbarLeft">
                    <img className='logoImg' src={logo} alt="logo" />
                    <span className="logo">Sportal</span>
            </Link>

            <div className="navbarCenter">
                <Link to='/submissions' className='prevSubs'>
                   Previous Submissions <CloudDoneIcon className='prevSubsIcon'/>
                </Link>
            </div>

            <div className="navbarRight">
                <button className='logoutButton' onClick={handleClick}>Logout <ExitToAppIcon className='logoutIcon'/></button>
            </div>
        </div>
    )
}
