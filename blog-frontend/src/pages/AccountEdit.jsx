import React, { useContext, useEffect, useState } from 'react'
import BlogContext from '../context/BlogContext'
import { FaPen } from "react-icons/fa";
import PopUp from '../components/PopUp';

const AccountEdit = () => {

    const [userDetails, setUserDetails] = useState({
        name : "",
        username : "",
        password : ""
    })

    const onChangeHandler = (e, option) => {
        if(option==="name")
            setUserDetails({ ...userDetails, name: e.target.value })
        else if(option==="username")
            setUserDetails({ ...userDetails, username: e.target.value })
        else
            setUserDetails({ ...userDetails, password: e.target.value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(userDetails)
    }

  return (
    <div>
        <h1 className='flex items-center gap-3 text-2xl font-bold mb-4'>
            <FaPen />
            Account Edit Section
        </h1>

        <form className='flex flex-col gap-4' onSubmit={onSubmitHandler}>
            <input className='px-4 py-2 border-2 border-black rounded-lg outline-slate-400 active:shadow-lg' type="text" value={userDetails.name}
                onChange={(e)=>onChangeHandler(e, "name")}
            />
            <input className='px-4 py-2 border-2 border-black rounded-lg outline-slate-400 active:shadow-lg' type="text" value={userDetails.username} 
                onChange={(e)=>onChangeHandler(e, "username")}
            />
            <input className='px-4 py-2 border-2 border-black rounded-lg outline-slate-400 active:shadow-lg' type="text" value={userDetails.password} 
                onChange={(e)=>onChangeHandler(e, "password")}
            />

            <button className='border-2 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white hover:border-slate-700 border-black transition-colors delay-100 font-bold text-xl' type="submit">Submit</button>
        </form>

        <PopUp operation={"Account Deletion"} message={"Do you want to delete this account?"} />
    </div>
  )
}

export default AccountEdit