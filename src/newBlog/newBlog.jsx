import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../blogsData/blogsData.js";
const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setAuthor] = useState("");
  const [blogId, setBlogId] = useState(blogs.length);
  const navigate = useNavigate();

  const handleSubmit = () => {

    setBlogId(blogId + 1);
    const id = blogId.toString();
    const blog = { id, title, body, author };
    blogs.push(blog);
    
    navigate('/Story-Time');
  };
  return (
    <div
      id="new-Blog"
      className="bg-[#262A2E] h-screen w-screen  text-white p-5 overflow-auto"
    >
      <form
        onSubmit={()=>{
            handleSubmit();
        }}
        className="flex flex-col justify-center items-center m-auto"
      >
        <label>Title</label>
        <input
          type="text"
          required
          className="w-[80%] md:w-[30%] transition-all duration-500 rounded-3xl p-[15px] bg-[#8a8d8f90] placeholder:text-center"
          placeholder="Blog title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label>blog</label>
        <textarea
          cols="30"
          rows="10"
          className="w-[80%] md:w-[30%] transition-all duration-500 rounded-3xl p-[15px] bg-[#8a8d8f90] placeholder:text-center"
          placeholder="Fill free"
          value={body}
          onChange={(e) => {
            setbody(e.target.value);
          }}
        ></textarea>

        <label>Author</label>
        <input
          type="text"
          required
          className="w-[80%] md:w-[30%] transition-all duration-500 rounded-3xl p-[15px] bg-[#8a8d8f90] placeholder:text-center"
          placeholder="Written by"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />

        <button className="bg-[#08090b9c] text-[20px] text-[#d3d3d3] m-[20px] p-[10px] rounded-2xl w-[80%] md:w-[20%] transition-all duration-500 hover:bg-[#f2f0f0cc] hover:text-[#171717]"
          
        >
          Add blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
