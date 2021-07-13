import React from 'react'
import './login.css'

export default function Login() {
    // const PF = process.env.REACT_APP_PF


    return (
        <div class='login'>
            <div className="loginWrapper">
                <div className='loginLeft'>
                    <h2 className='loginLogo'>Sportal</h2>
                    <span className='loginDesc'>Sportal stems from the words sport and portal. Join the action.</span>
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
