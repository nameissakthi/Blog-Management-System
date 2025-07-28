import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../App";

const Post = () => {
  const params = useParams();
  const postId = params.id;
  const [post, setPost] = useState({});

  const loadPost = async () => {
    const response = await axios.get(BACKEND_URL+`/posts/get/${postId}`)

    if(response.status===200){
      setPost(response.data)
    }
  }

  useEffect(() => {
    loadPost()
  })

  return (
    <div className="px-16">
      <div>
        <h1 className="text-4xl font-semibold mb-1">{post.title}</h1>
        <div>
			<span>Category : </span>
			<span className="text-blue-800">{post.category}</span>
		</div>
      </div>
	  <div className="my-4 px-4">
		{
			post.content
		}
	  </div>
	  <div className="flex justify-between items-center">
		{/* <span className="font-semibold">Author : <span className="text-gray-500 font-normal">{post.author}</span></span> */}
		<span className="flex items-center gap-1">
			<FcLike />
			{post.likes}
		</span>
	  </div>
    </div>
  );
};

export default Post;
