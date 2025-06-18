import React, { useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa"
import { FcLike } from "react-icons/fc"

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    setPosts([
      {
        id: 1,
        title: "Sample post",
        subjects: ["sa", "mpll", "fsdds"],
        content: "ssdgsg",
        author: "ddsfsdfs",
        likes: 10
      },
      {
        id: 2,
        title: "Samplst",
        subjects: ["sa", "mpll", "fsdds"],
        content: "ssdgsg",
        author: "ddsfsdfs",
        likes: 10
      }
    ])
  }, [])

  return (
    <div className='flex gap-5'>
      {
        posts.map((post, index)=>{
          return (
            <div key={index} className='border-2 rounded-lg p-2 min-w-72'>
              <p className='text-2xl font-bold mb-4'>{post.title}</p>
              <div className='flex gap-2'>
                {
                  post.subjects.map((value, index)=>{
                    return (
                      <p key={index} className='rounded-lg py-1 px-2 text-white bg-orange-400'>{value}</p>
                    )
                  })
                }
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
          )
        })
      }
    </div>
  )
}

export default Home