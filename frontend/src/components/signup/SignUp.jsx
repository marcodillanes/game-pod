import React, { useState } from "react"

export const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.precentDefault()
    }

    return (
        <>Sign Up  
        
        <form onSubmit={handleSubmit}>
            <div>
                <label for="username">Username</label>
                <input type="text" placeholder='Enter a Username!' value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div>
                <label for="password">Password Must contain at least one number and one uppercase and one lowercase letter, and at least 6 or more characters</label>
                <input type="password" placeholder="Enter a Password" value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            
            <button>Sign Up</button>
            
        </form>
        
        <button>Already have an account? Login here!</button>
        </>
    )
}