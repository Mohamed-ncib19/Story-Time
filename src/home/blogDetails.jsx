import { useParams } from "react-router-dom";
import travel from '../assets/images/travel.jpeg'
import  Timeline  from './timeLine';
import CalendarIcon from "./calendarIcon";
const BlogContent = (props) => {
    
    const {ID} = useParams()
    const data = props.data
    const blog = data.filter((blog)=> blog.id ===ID)
   
    
    return ( 
        <div id="blog-content" className="bg-[#262A2E] w-screen h-full text-white " key={blog[0].id}>  
        <Timeline />
            <div id="content" className="bg-[#161819a9] w-screen h-full md:w-[70%] md:h-full m-auto rounded-3xl p-[30px] flex flex-col space-x-4 flex-wrap">
                
                <img src={travel} alt="pic Not Found" className="w-[90%]  h-[40%] md:h-[70%] md:w-[70%] m-auto rounded-3xl hover:scale-105 transition-all duration-500" />
                <div id="title-story-author" className="bg-[#161819a9] flex flex-col  leading-[45px] space-y-[30px] rounded-2xl md:w-full w-full float-left p-4 md:m-auto m-auto" >
                    <h2 id="tile" className="text-[50px] text-center">{blog[0].title}</h2>
                    <p id="story" className="tracking-[2px] ">{blog[0].body} </p>
                    
                    <div id="author-date" className=" flex flex-row justify-center items-center tracking-[3px]">
                            <h4 id="writer" className="float-left text-[15px]">by {blog[0].author}</h4>
                            <i className="text-gray-500">
                            <CalendarIcon />
                            </i>
                            <p className="text-[12px] text-gray-500">26.Apr 2023</p>
                            
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogContent;