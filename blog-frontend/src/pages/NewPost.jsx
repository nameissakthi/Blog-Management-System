import React, { useState } from "react";

const NewPost = () => {

  const [post, setPost] = useState({
    title : "",
    category : "",
    content : ""
  })

  const onFieldChange = (e, f) => {
    if(f=="title"){
      setPost({ ...post, title : e.target.value })
    }else if(f=="category"){
      setPost({ ...post, category : e.target.value })
    }else{
      setPost({ ...post, content : e.target.value })
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(post)
  }

  return (
    <div className="px-[5%]">
      <div className="border-2 border-gray-200 rounded-lg p-4 shadow-md w-full">
        <h1 className="text-2xl text-center mb-2">New Post</h1>
        <form className="flex flex-col p-4 gap-4" onSubmit={onFormSubmit}>
          <input onChange={e=>onFieldChange(e, "title")} type="text" placeholder="Title" className="p-2 border-[1px] focus:border-2 outline-none border-slate-600 rounded-lg" />
          <input onChange={e=>onFieldChange(e, "category")} type="text" placeholder="Category" className="p-2 border-[1px] focus:border-2 outline-none border-slate-600 rounded-lg" />
          <textarea onChange={e=>onFieldChange(e, "content")} name="content" id="content" cols="30" rows={25} placeholder="Blog Content" className="p-2 border-[1px] outline-none border-slate-600 rounded-lg focus:border-2"></textarea>
          <div className="mt-4">
            <button type="submit" className="w-full p-3 bg-orange-400 border-2 border-orange-400 rounded-lg text-white font-bold text-xl">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
