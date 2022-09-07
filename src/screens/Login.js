import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import { paths } from '../utils/path'

const Login = () => {
    return (
        <div style={{ maxWidth: '720px', margin: '20px auto' }}>
            <div className='login-card'>
                <div className='login-card-hearder'>
                    Login
                </div>
                <div className='login-card-body'>

                    <div className='item'>
                        <label htmlFor='email' className='label'>E-Mail Address</label>
                        <input type='text' id='email' className='input-text' />
                    </div>
                    <div className='item'>
                        <label htmlFor='password' className='label'>Password</label>
                        <input type='password' id='password' className='input-text' />
                    </div>
                    <div className='item'>
                        <div className='left'>

                        </div>
                        <div className='right'>
                            <input type='checkbox' id='checkbox' />
                            <label htmlFor='checkbox'>Remember Me</label>
                        </div>
                    </div>

                    <div className='item'>
                    <div className='left'>
                        
                    </div>
                        <div className='right'>
                            <NavLink to={paths.users} className='login-btn'>
                                Login
                            </NavLink>
                            <span style={{color:'#005D8E',cursor: 'pointer'}}>Forget Your Password?</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login