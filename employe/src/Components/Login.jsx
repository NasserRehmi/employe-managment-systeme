import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => {
            if(result.data.loginStatus) {
                localStorage.setItem("valid", true)
                navigate('/dashboard')
            } else {
                setError(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='container-fluid' style={{
        height: '100vh',
        width: '100vw'
      }}>
        <div className='row justify-content-center align-items-center vh-100'>
            <div className='col-md-4'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center'>Admin Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                                 onChange={(e) => setValues({...values, email : e.target.value})} className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password">Password:</label>
                                <input type="password" name='password' placeholder='Enter Password'
                                 onChange={(e) => setValues({...values, password : e.target.value})} className='form-control'/>
                            </div>
                            <button className='btn btn-primary btn-block'>Log in</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login