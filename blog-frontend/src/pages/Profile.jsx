import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import axios from 'axios'
import { BACKEND_URL } from '../App'
import BlogContext from '../context/BlogContext'

const Profile = () => {

  const { login, navigate, user } = useContext(BlogContext);

  useEffect(() => {
    if(login===false){
      navigate("/login")
    }
  })

  return (
    <div className='px-10'>
      <h1 className='text-3xl font-bold'>Profile</h1>
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
                  <p className='flex items-center gap-1 justify-center font-extralight text-sm'>
                    <FaRegUserCircle />
                    {post.author}
                  </p>
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
    </div>
  )
}

export default Profile