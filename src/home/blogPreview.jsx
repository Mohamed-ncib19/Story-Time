import { Link } from "react-router-dom";
import travel from '../assets/images/travel.jpeg';

const BlogPreview = (props) => {
  const data = props.data;

  return ( 
    <div id="blogList" className="flex flex-col gap-4 bg-[#262A2E] w-full">
      {data.map((item) => {
        const blog = item.todo;
        const uniqueId = item.uniqueId;
       
        return (
          <Link to={`/blogs/${uniqueId}`} key={uniqueId}>
            <div id="blog-Preview" className="text-white flex md:flex-row flex-col bg-[#161819] justify-start items-start m-auto rounded-3xl hover:cursor-pointer w-[80vw] p-8 gap-8 md:w-[60vw]">
              <img src={travel} alt="pic not found" className="w-[100%] h-[60%] md:w-[40%] md:h-auto hover:scale-105 transition-all duration-500 cursor-pointer rounded-2xl" />
              <div id="content" className="flex flex-col gap-8 justify-start items-start m-auto">
                <h1 className="text-[40px]">{blog.title}</h1>
                {blog.body.length >= 232 ? (
                  <p>{blog.body.substring(0, 232) + '...'}</p>
                ) : (
                  <p>{blog.body}</p>
                )}
                <h4 >written by: <span className="font-bold tracking-widest">{blog.author}</span></h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default BlogPreview;
