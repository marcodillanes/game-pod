import React from 'react'

function signin() {
  return (
    <div>
        <div>
            <form action="">
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type="text" placeholder='Enter Username!'/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password!'/>
                </div>
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default signin