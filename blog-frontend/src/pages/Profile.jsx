import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { BACKEND_URL } from '../App'
import BlogContext from '../context/BlogContext'
import { IoSettings } from "react-icons/io5";
import Settings from '../components/Settings'

const Profile = () => {

  const { navigate, user } = useContext(BlogContext);
  const [settings, setSettings] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("login")==="false"){
      navigate("/login")
    }
  })

  const settingsHandler = () => {
	if(settings){
		setSettings(false)
		return;
	}

	setSettings(true)
  }

  return (
    <div className='px-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Profile</h1>
		<IoSettings className='text-2xl hover:cursor-pointer' onClick={settingsHandler} />
      </div>
      <div className='flex flex-col my-4'>
        <span className='font-semibold'>Name : <span className='font-normal'>{user.name}</span></span>
        <span className='font-semibold'>Username : <span className='font-normal'>{user.username}</span></span>
      </div>
      <div className='flex gap-2'>
        {
          user.posts!=null && user.posts.length!=0 && user.posts.map((post, index) => {
            return (
            <Link key={index} to={`/post/${post.id}`}>
              <div className='border-2 rounded-lg p-2 min-w-72'>
                <p className='text-2xl font-bold mb-4'>{post.title}</p>
                <div className='flex'>
                  <p key={index} className='rounded-lg py-1 px-2 text-white bg-orange-400'>{post.subject}</p>
                </div>
                <div className='flex justify-between mt-2'>
                  {/* <p className='flex items-center gap-1 justify-center font-extralight text-sm'>
                    <FaRegUserCircle />
                    {post.author}
                  </p> */}
                  <p className='flex items-center gap-1 justify-center font-extralight text-sm'>
                    <FcLike />
                    {post.likes}
                  </p>
                </div>
              </div>
            </Link>
          )
        })
        }
      </div>
	  {
		settings && 
		<div className='isolate aspect-video bg-white/80 shadow-lg ring-1 ring-black/5 rounded-lg w-[25%] h-[25%] fixed top-[35%] left-[40%] p-4'>
			<Settings setSettings={setSettings} />
		</div>
	  }
    </div>
  )
}

export default Profile