import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CheckIcon from "../home/checkIcon.jsx";
import {db} from '../firebase/firebase.js'
import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';


const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [addButton, setAddButton] = useState('Add Blog');
  const [iconClassName, setIconClassName] = useState('hidden');

  const navigate = useNavigate();

  const uniqueId = uuidv4();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
   
    set(ref(db,`/${uniqueId}`),{
      todo:blog,
      uniqueId,
    });
    

    blogAdd();
    setTimeout(() => {
      navigate(`/blogs/${uniqueId}`);
    }, 1000);

    
  };

  const blogAdd = () => {
    setIconClassName('text-white font-bold rounded-full p-[3px] bg-green-400');
    setAddButton('Done');
  };
  
  return (
    <div
      id="new-Blog"
      className="bg-[#262A2E] h-screen w-screen  text-white p-5 overflow-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center m-auto"
      >
        <label>Title</label>
        <input
          type="text"
          required
          className="w-[80%] lg:w-[30%] transition-all duration-500 rounded-3xl p-[15px] bg-[#8a8d8f90] placeholder:text-center"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog</label>
        <textarea
          cols="30"
          rows="10"
          className="w-[80%] lg:w-[30%] transition-all duration-500 rounded-3xl p-[15px] bg-[#8a8d8f90] placeholder:text-center"
          placeholder="Feel free"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Author</label>
        <input
          type="text"
          required
          className="w-[80%] lg:w-[30%] transition-all duration-500 rounded-3xl p-[15px] bg-[#8a8d8f90] placeholder:text-center"
          placeholder="Written by"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        
        <button className="bg-[#08090b9c] text-[20px] text-[#d3d3d3] flex flex-row justify-center items-center gap-4 m-[20px] p-4 rounded-2xl w-[80%] lg:w-[20%] transition-all duration-500 hover:bg-[#e6e3e3cc] hover:text-[#171717]">
          <span className={iconClassName}><CheckIcon /></span>
          {addButton}
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
