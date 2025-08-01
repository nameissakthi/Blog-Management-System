import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../App";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const response = await axios.get(BACKEND_URL + "/posts/");

    if (response.status === 200) {
      setPosts(response.data);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="flex gap-5">
      {posts.map((post, index) => {
        return (
          <Link key={index} to={`/post/${post.id}`}>
            <div className="border-2 rounded-lg p-2 min-w-72">
              <p className="text-2xl font-bold mb-4">{post.title}</p>
              <div className="flex">
                <p
                  key={index}
                  className="rounded-lg py-1 px-2 text-white bg-orange-400"
                >
                  {post.category}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                {/* <p className='flex items-center gap-1 justify-center font-extralight text-sm'>
                    <FaRegUserCircle />
                    {post.author}
                  </p> */}
                <p className="flex items-center gap-1 justify-center font-extralight text-sm">
                  <FcLike />
                  {post.likes}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
