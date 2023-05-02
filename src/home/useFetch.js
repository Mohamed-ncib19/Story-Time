import { useState,useEffect } from "react";
import  blogs  from '../blogsData/blogsData.js';

const useFech =()=>{
    const [data,setData] = useState(null)
    const [isLoading , setIsLoading] = useState(true)

    useEffect(()=>{
   
        const  fetch = ()=>{
           setData(blogs)
           setIsLoading(false)
         }
         fetch()
           
    },[blogs]);
    return {data,isLoading}
}
export default useFech;