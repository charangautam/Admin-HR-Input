import React from 'react'
import './lander.css'
import logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom'

export default function Lander() {

    return (
        <div className='lander'>
            <div className="landerWrapper">
                <div className="landerTop">
                    <div className='logoContainer'>
                        <img className='logoImg' src={logo} alt="logo" />
                        <h2 className='logoText'>Sportal</h2>
                    </div>
                    <ul className='landerList'>
                        <li className='landerDesc'>
                            Admin HR Input that allows users to input an athlete's data
                        </li>
                        <li className='landerDesc'>
                            Users are then able to download all inputted data in a csv file
                        </li>
                    </ul>
                </div>
                <div className="landerBottom">
                <div className='joinButtons'>
                        <Link to='/login'>
                            <button className='loginButton'>Login</button>
                        </Link>
                        <Link to='/register'>
                            <button className='registerButton'>Register</button>
                        </Link>
                    </div>
                    <span className='joinDesc'>Join us to enjoy the benefits of our global community.</span>
                </div>
            </div>
        </div>

    )
}
