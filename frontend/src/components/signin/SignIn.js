import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    /* const [loginStatus, setLoginStatus] = useState('') */
    const navigate = useNavigate()

    function handleSubmit(event) {
        Axios.post("http://localhost:5000/", {
            username: username, 
            password: password
        }).then((response) => {
            console.log(response)
        })
        event.preventDefault();
    }

  return (
   
    <div className='d-flex vh-100 justify-content-center align-items-center bg-black'>
        <div className='p-3 bg-grey w-25'>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='Enter a Username!' className='form-control'
                    onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter a Password!' className='form-control'
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className='btn btn-success mb-2'>Sign In</button>  
                  
            </form>
            
            <button onClick={() => {navigate('/SignUp')}} className='btn btn-success'>Or Sign Up Here!</button>
       
        </div>
        
    </div>
  )
}

export default SignIn