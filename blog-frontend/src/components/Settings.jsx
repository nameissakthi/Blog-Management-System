import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'
import { Link } from 'react-router-dom'

const Settings = ({setSettings}) => {

	const { user } = useContext(BlogContext)

  return (
    <div className='flex flex-col'>
      <button className='absolute top-3 right-3 bg-black rounded-full w-7 pb-1 text-white' onClick={()=>setSettings(false)}>x</button>
        <h1 className='text-2xl mb-5 text-center font-bold'>Settings</h1>

        <div className='flex justify-between'>
			<div>
				<h1 className='text-xl font-bold'>Account Details</h1>
				<div>
					<p><span className='font-bold'>Name : </span>{user.name}</p>
					<p><span className='font-bold'>username : </span>{user.username}</p>
					<p><span className='font-bold'>Number of Posts : </span>{user.posts.length}</p>
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<button className='bg-red-500 text-white py-2 px-4 rounded-xl'>Delete Account</button>
            	<Link to={"/edit-account"} className='bg-blue-600 text-white py-2 px-4 rounded-xl'>Edit Account</Link>
			</div>
        </div>
    </div>
  )
}

export default Settings