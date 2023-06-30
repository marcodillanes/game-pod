import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.precentDefault()
    }

    return (
        <>Sign Up  
        
        <div className='d-flex vh-100 justify-content-center align-items-center bg-black'>
            <div className='p-3 bg-grey w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label for="username">Username</label>
                        <input type="text" placeholder='Enter a Username!' value={username} className="form-control" 
                        onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                    <div className='mb-2'>
                        <label for="password">Password </label>
                        <input type="password" placeholder="At least one numbe, upper, and lowercase " value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" className="form-control"
                        onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
            
                <button className='btn btn-success'>Sign Up</button>  
                </form>
                <button className='btn btn-success'>Already have an account? Login here!</button>
            </div>
                
        </div>
        
        
        
        </>
    )
}