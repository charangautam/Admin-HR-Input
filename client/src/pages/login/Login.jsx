import React from 'react'
import './login.css'
import logo from '../../images/logo.jpg'

export default function Login() {

    return (
        <div class='login'>
            <div className="loginWrapper">
                <div className='loginLeft'>
                    <div className="logoContainer">
                        <img className='logoImg' src={logo} alt="logo" />
                        <h2 className='logoText'>Sportal</h2>
                    </div>
                    <span className='loginDesc'>Sportal is designed to be a vast portal for all sport enthusiasts.</span>
                </div>
                <div className='loginRight'>
                    <form className='loginBox'>
                        <input
                            className='loginInput'
                            type="text" 
                            required
                            placeholder='Username'
                        />
                        <input 
                            className='loginInput' 
                            type="password" 
                            required
                            placeholder='Password'
                            minLength='6'
                        /> 
                        <button className='loginButton' type='submit'> Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
