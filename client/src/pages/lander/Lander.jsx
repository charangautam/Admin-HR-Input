import React, { useEffect, useState } from 'react'
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
                            Sportal offers you a personilized portal of news and highlights from your favorite sport teams and players. 
                        </li>
                        <li className='landerDesc'>
                            Interact with other users from all over the world and share the value that sports brings to all of us!
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
