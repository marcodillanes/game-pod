import React, { useState } from "react"

export const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.precentDefault()
    }

    return (
        <>SignUp
        
        <form onSubmit={handleSubmit}>
            <label for="username">Username</label>
            <input type="text" placeholder='Enter a Username!' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </form>

        </>
    )
}