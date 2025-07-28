import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <form className='flex justify-center'>
            <div className='bg-gray-100 px-16 py-10 hover:shadow-lg shadow-slate-400 transition-shadow delay-75'>
                <h1 className='text-3xl text-center font-semibold mb-10'>Register</h1>
    
                <div className='flex flex-col gap-4'>
                    <input className='border-2 border-slate-700 rounded-xl p-2' type="text" placeholder='Name' />
                    <input className='border-2 border-slate-700 rounded-xl p-2' type="text" placeholder='Username' />
                    <input className='border-2 border-slate-700 rounded-xl p-2' type="password" placeholder='Password' />
                </div>
    
                <div className='flex justify-center mt-5'>
                    <button className='border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all delay-75 w-full p-2 rounded-xl font-semibold' type="submit">Register</button>
                </div>
    
                <div className='mt-4'>
                    <p>
                        Click here to <Link className='text-blue-700' to={"/login"}>Login</Link> in to your account.
                    </p>
                </div>
            </div>
        </form>
  )
}

export default Register