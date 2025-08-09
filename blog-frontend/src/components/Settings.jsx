import React, { useContext, useEffect, useState } from 'react'
import BlogContext from '../context/BlogContext'
import { Link } from 'react-router-dom'
import { ImBin } from "react-icons/im";
import { FaPenSquare } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import PopUp from './PopUp';
import axios from 'axios';
import { BACKEND_URL } from '../App';

const Settings = ({setSettings}) => {

	const { user, navigate, setLogin } = useContext(BlogContext)

	const [logoutOpen, setLogoutOpen] = useState(false)
	const [logoutConfirm, setLogoutConfirm] = useState(false);

	const [deleteAccOpen, setDeleteAccOpen] = useState(false)
	const [deleteAccConfirm, setDeleteAccConfirm] = useState(false)

	const logoutOperation = () => {
		setLogoutOpen(true)
		setLogoutConfirm(false)
	}

	const deleteAccountOperation = () => {
		setDeleteAccOpen(true)
		setDeleteAccConfirm(false)
	}

	const deleteAccount = async () => {
		await axios.delete(BACKEND_URL+`/author/delete/${user.id}`)
	}

	useEffect(() => {
		if(deleteAccConfirm){
			deleteAccount()
			setDeleteAccOpen(false)
			localStorage.removeItem("user")
			localStorage.removeItem("login")
			setLogin(false)
			navigate("/")
		}
	}, [deleteAccConfirm])

	useEffect(() => {
		if(logoutConfirm) {
			localStorage.removeItem("user")
			localStorage.removeItem("login")
			setLogin(false)
			navigate("/")
		}
	}, [logoutConfirm])

  return (
    <div className='flex flex-col items-center'>
      <button className='absolute top-3 right-3 bg-black rounded-full w-7 pb-1 text-white' onClick={()=>setSettings(false)}>x</button>
        <h1 className='text-2xl mb-5 text-center font-bold'>Settings</h1>

        <div className='flex flex-col'>
			<div className='mb-6'>
				<h1 className='text-xl font-bold'>Account Details</h1>
				<div>
					<p><span className='font-bold'>Name : </span>{user.name}</p>
					<p><span className='font-bold'>username : </span>{user.username}</p>
					<p><span className='font-bold'>Number of Posts : </span>{user.posts.length}</p>
				</div>
			</div>
			<div className='flex gap-4'>
				<button className='bg-red-500 p-2 rounded-lg w-fit' onClick={deleteAccountOperation}>
					<ImBin className='text-2xl text-white' />
				</button>
            	<Link to={"/edit-account"} className='bg-blue-600 text-white p-2 w-fit rounded-lg'>
					<FaPenSquare className='text-2xl text-white' />
				</Link>
				<button className='bg-blue-600 text-white p-2 w-fit rounded-lg' onClick={logoutOperation}>
					<RiLogoutBoxLine className='text-2xl text-white' />
				</button>
			</div>
        </div>

		<div className={!deleteAccOpen&&"hidden"}>
			<PopUp operation={"Delete Account"} message={"Do you want to delete this account?"} setOpen={setDeleteAccOpen} setConfirm={setDeleteAccConfirm} />
		</div>

		<div className={!logoutOpen&&"hidden"}>
			<PopUp operation={"Logout"} message={"Do you want to logout?"} setOpen={setLogoutOpen} setConfirm={setLogoutConfirm} />
		</div>
    </div>
  )
}

export default Settings