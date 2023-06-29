import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function SignIn() {
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-black'>
        <div className='p-3 bg-grey w-25'>
            <form action="">
                <div className='mb-2'>
                    <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='Enter Username!' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password!' className='form-control'/>
                </div>
                <button className='btn btn-success'>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn