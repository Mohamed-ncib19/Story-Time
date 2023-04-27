import { useState,useEffect } from "react";
import travel from '../assets/images/travel.jpeg'
    const FetchData = (props) => {
    let data = props.data
    return ( 

       <div id="blogList" className="flex flex-col gap-4 bg-[#262A2E] w-full" >
        
        {data.map((blog)=>(
            <div id="blogPreview" key={blog.id} className="text-white flex md:flex-row flex-col bg-[#161819] justify-start items-start m-auto rounded-3xl  hover:cursor-pointer w-[80vw] p-8 gap-8 md:w-[60vw]">
                <img src={travel} alt="pic not found" className="w-[100%] h-[60%] md:w-[40%] md:h-auto hover:scale-105 transition-all duration-500 cursor-pointer rounded-2xl" />
                <div id="content" className="flex flex-col gap-4 justify-start items-start m-auto">
                    <h1 className="text-[30px]">{blog.title}</h1>
                    
                    {blog.body.length >=232 && (
                        <p>
                            {blog.body.substring(0,232)+'...'}
                        </p>
                    )}
                    <h4>written by : {blog.author}</h4>
                </div>
            </div>
        ))}
        
       </div>
     );
}
 
export default FetchData;