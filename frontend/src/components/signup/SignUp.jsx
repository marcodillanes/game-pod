import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

export const SignUp = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        Axios.post("http://localhost:5000/SignUp", {
            username: usernameReg, 
            password: passwordReg
        }).then((response) => {
            console.log(response)
        })
        event.preventDefault()
    }

    return ( 
        
        <div className='d-flex vh-100 justify-content-center align-items-center bg-black' style={{ background: 'linear-gradient(#16a6d2 30%, #2a24e3 120%)'}}>
            <div className='p-3 bg-grey w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="username">Username (Max of 10 chars)</label>
                        <input type="text" placeholder='Enter a Username!' value={usernameReg} className="form-control" 
                        onChange={(e) => setUsernameReg(e.target.value)} required/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password Must be 6-10 chars long</label>
                        <input type="password" placeholder="At least one number, upper, and lowercase letter" value={passwordReg} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" className="form-control"
                        onChange={(e) => setPasswordReg(e.target.value)} required/>
                    </div>
            
                <button className='btn btn-success mb-2'
                            style={{ 
                                backgroundColor: 'transparent', 
                                border: '1px solid black',
                                color: 'black'
                            }} 
                        onMouseEnter={(e) => {e.target.style.backgroundColor = '#d2c216';}}
                        onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}
                >Sign Up</button>  
                </form>
                <button onClick={() => {navigate('/')}} className='btn btn-success'
                            style={{ 
                                backgroundColor: 'transparent', 
                                border: '1px solid black',
                                color: 'black'
                            }} 
                        onMouseEnter={(e) => {e.target.style.backgroundColor = '#d2c216';}}
                        onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}
                
                    >Already have an account? Login here!
                </button>

                <h1 style={{
                    fontFamily: 'Press Start 2P, cursive',
                    fontSize: '67px',
                    textShadow: '5px 8px 5px rgba(0, 0, 0, 0.966)',
                    color: '#d2c216',
                    top: '25%',
                    left: '35%',
                    position: 'absolute',
                }}>
                    Game Pod
                </h1>                     

            </div>
                
        </div>
 
    )
}