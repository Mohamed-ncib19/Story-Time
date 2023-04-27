
import { useState,useEffect } from 'react';
import FetchData from './fetchData';
import Hero from './hero';
import Loading from './loading';
import  blogs  from '../blogsData';

const Home = () => {
    const [data,setData] = useState(null)
    const [isLoading , setIsLoading] = useState(true)

    useEffect(()=>{
        fetch = () => {
            setData(blogs)
            setIsLoading(false)
        }
        fetch()
    },[]);

    return ( 
        <div id="home" className="bg-[#262A2E] h-screen w-screen">
            <Hero />
        {/*logical form if the value was true the compiler excute the next part*/ }
            {isLoading && <Loading  />}
          {data && <FetchData  data={data} />}
        </div>
     );
}
 
export default Home;