import React, { useRef, useState, } from 'react'
import './register.css'
import axios from 'axios'
import logo from '../../images/logo.jpg'
import { CircularProgress } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Register() {
    const email = useRef() 
    const username = useRef()
    const password = useRef()
    const repeatPassword = useRef()
    const history = useHistory()

    const [isFetching, setIsFetching] = useState(false)


    const handleSubmit = async (e) => {
        setIsFetching(true)
        e.preventDefault()
        if(repeatPassword.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords don't match!")
        } else {
            const user = {
                email: email.current.value,
                username: username.current.value,
                password: password.current.value
            }            
            try {
                await axios.post('/auth/register', user)
                history.push('/login')
            } catch (err) {
                console.log(err)
            }
        }
    }
    
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <div className="logoContainer">
                        <img className='logoImg' src={logo} alt="logo" />
                        <h2 className='logoText'>Sportal</h2>
                    </div>
                    <span className='registerDesc'>Sportal is designed to be a vast portal for all sport enthusiasts.</span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleSubmit}>
                        <input 
                            className='registerInput' 
                            type="email" 
                            placeholder='Email'
                            required 
                            ref={email}
                        />
                        <input 
                            className='registerInput' 
                            type='text'
                            placeholder='Username'
                            required 
                            ref={username}
                        />
                        <input 
                            className='registerInput' 
                            type="password" 
                            placeholder='Password' 
                            required 
                            minLength='6'
                            ref={password}
                        />
                        <input 
                            className='registerInput' 
                            type="password" 
                            placeholder='Repeat Password' 
                            required 
                            minLength='6'
                            ref={repeatPassword}
                        />
                        <button className='registerButton' type='submit' disabled={isFetching}> 
                            {isFetching ? <CircularProgress size='20px'/> : 'REGISTER'}
                        </button>
                    </form>
                </div>
            </div>
            <Link to='/login' className='loginLink'>
                <span className='loginLinkText'>Already have an account?</span>
                <button className='loginLinkButton'>Login</button>
            </Link>
        </div>
    )
}
