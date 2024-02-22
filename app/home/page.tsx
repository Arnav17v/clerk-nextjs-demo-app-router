"use client";
import blogs from "@/app/blogs.json";
import { useState } from "react";


const AllBlogs = () => {
  const filteredBlogs = blogs
  const(setthis,this) = useState(true)
  return (
    <>
        <div className="flex justify-between max-w-[88rem] m-auto"><div className="p-4 text-4xl font-bold">My post</div><div><button>New Post</button></div></div>
      <div className=" flex flex-wrap">
        <ul className="flex gap-6 m-auto max-w-[66rem] pt-[60px]">
          {filteredBlogs.map((blog) => (
            <a key={blog.id} href={`./article/${blog.id}`}>
            <div>
              <div className="relative overflow-hidden w-[500px] flex flex-wrap justify-center">
                <img
                  key={blog.id}
                  className={`w-[597px] hover:scale-110 transition-all duration-700 rounded-xl`}
                  src={`${blog.img}`}
                />
              </div>
              <div className="p-4 mb-4 z-10  flex flex-col w-[497px] ">
                <span key={blog.id} className="text-4xl">{blog.title}</span>
                <span key={blog.id} className="text-lg">{blog.content}</span>
              </div>
            </div>
            </a>
          ))}
        </ul>
      </div>

    </>
  );
};

export default AllBlogs;
