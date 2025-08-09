import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../App'
import BlogContext from '../context/BlogContext'

const Register = () => {

    const { loadUser } = useContext(BlogContext);

    const [userDetails, setUserDetails] = useState({
        name : "",
        username : "",
        password : ""
    })

    const onChangeHandler = (e, field) => {
        if(field==="name")
            setUserDetails({ ...userDetails, name : e.target.value })
        else if(field==="username")
            setUserDetails({ ...userDetails, username : e.target.value })
        else if(field==="password")
            setUserDetails({ ...userDetails, password : e.target.value })
    }

    const createAccount = async (e) => {
        e.preventDefault()
        const response = await axios.post(BACKEND_URL+"/author/add", userDetails)

        if(response.status===200){
            loadUser(userDetails.username, userDetails.password)
        }
    }

  return (
    <form className='flex justify-center' onSubmit={e=>createAccount(e)}>
            <div className='bg-gray-100 px-16 py-10 hover:shadow-lg shadow-slate-400 transition-shadow delay-75'>
                <h1 className='text-3xl text-center font-semibold mb-10'>Register</h1>
    
                <div className='flex flex-col gap-4'>
                    <input className='border-2 border-slate-700 rounded-xl p-2' type="text" placeholder='Name' onChange={(e) => onChangeHandler(e, "name")} />
                    <input className='border-2 border-slate-700 rounded-xl p-2' type="text" placeholder='Username' onChange={(e) => onChangeHandler(e, "username")} />
                    <input className='border-2 border-slate-700 rounded-xl p-2' type="password" placeholder='Password' onChange={(e) => onChangeHandler(e, "password")} />
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