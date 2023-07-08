import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
    }

  return (
   
    <div className='d-flex vh-100 justify-content-center align-items-center bg-black'  style={{ background: 'linear-gradient(#16a6d2 30%, #2a24e3 120%)'}}>
        <div className='p-3 bg-grey w-25'>
            <form action="">
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
                <button className='btn btn-success mb-2' 
                            style={{ 
                                backgroundColor: 'transparent', 
                                border: '1px solid black',
                                color: 'black'
                            }} 
                        onMouseEnter={(e) => {e.target.style.backgroundColor = '#d2c216';}}
                        onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}
                    >Sign In
                </button>  
                  
            </form>
            
                <button onClick={() => {navigate('/SignUp')}} className='btn btn-success'
                                style={{ 
                                    backgroundColor: 'transparent', 
                                    border: '1px solid black',
                                    color: 'black'
                                }} 
                            onMouseEnter={(e) => {e.target.style.backgroundColor = '#d2c216';}}
                            onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}
                >Or Sign Up Here!
                </button>
       
        </div>
    </div>
  )
}

export default SignIn