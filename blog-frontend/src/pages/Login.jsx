import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../App'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const response = await axios.get(BACKEND_URL+"/author/get", { username, password })

        console.log(response)
    }

  return (
    <form className='flex justify-center' onSubmit={onSubmitHandler}>
        <div className='bg-gray-100 px-16 py-10 hover:shadow-lg shadow-slate-400 transition-shadow delay-75'>
            <h1 className='text-3xl text-center font-semibold mb-10'>Login</h1>

            <div className='flex flex-col gap-4'>
                <input className='border-2 border-slate-700 rounded-xl p-2' type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input className='border-2 border-slate-700 rounded-xl p-2' type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div className='flex justify-center mt-5'>
                <button className='border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all delay-75 w-full p-2 rounded-xl font-semibold' type="submit">Login</button>
            </div>

            <div className='mt-4'>
                <p>
                    Click here to <Link className='text-blue-700' to={"/register"}>Register</Link> an account.
                </p>
            </div>
        </div>
    </form>
  )
}

export default Login