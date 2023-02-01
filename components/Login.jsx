import React from 'react'

const Login = () => {
  return (
    <div className='container'>
        <form>
            <input placeholder="username" type="text"/>
            <input placeholder="password" type="password"/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login