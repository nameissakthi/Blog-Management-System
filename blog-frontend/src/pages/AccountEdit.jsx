import React, { useContext, useEffect, useState } from 'react'
import BlogContext from '../context/BlogContext'
import { FaPen } from "react-icons/fa";
import PopUp from '../components/PopUp';
import axios from 'axios';
import { BACKEND_URL } from '../App';

const AccountEdit = () => {

    const { user, setUser } = useContext(BlogContext);

    const [userDetails, setUserDetails] = useState({})

    const [open, setOpen] = useState(false);
    const [confirm, setConfirm] = useState(false)

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
        setOpen(true)
    }

    useEffect(() => {
        console.log(userDetails)

        if(confirm) {
            setUser({...user, userDetails})

            const updateAccount = async () => {
                console.log("hi")
                const response = await axios.put(BACKEND_URL+"/author/update", { user })
                console.log(response);
            }
        }
        setConfirm(false)
        setOpen(false)

        console.log(user)
    }, [confirm])

  return (
    <div>
        <h1 className='flex items-center gap-3 text-2xl font-bold mb-4'>
            <FaPen />
            Account Edit Section
        </h1>

        <form className='flex flex-col gap-4' onSubmit={onSubmitHandler}>
            <input className='px-4 py-2 border-2 border-black rounded-lg outline-slate-400 active:shadow-lg' type="text" value={userDetails.name}
                onChange={(e)=>onChangeHandler(e, "name")}
                placeholder='name'
            />
            <input className='px-4 py-2 border-2 border-black rounded-lg outline-slate-400 active:shadow-lg' type="text" value={userDetails.username} 
                onChange={(e)=>onChangeHandler(e, "username")}
                placeholder='username'
            />
            <input className='px-4 py-2 border-2 border-black rounded-lg outline-slate-400 active:shadow-lg' type="text" value={userDetails.password}
                onChange={(e)=>onChangeHandler(e, "password")}
                placeholder='password'
            />

            <button className='border-2 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white hover:border-slate-700 border-black transition-colors delay-100 font-bold text-xl' type="submit">Submit</button>
        </form>

        {
            open &&
            <PopUp operation={"Account Updation"} message={"Do you want to update this account?"} setOpen={setOpen} setConfirm={setConfirm} />
        }
    </div>
  )
}

export default AccountEdit