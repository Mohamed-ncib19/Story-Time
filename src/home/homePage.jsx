import BlogPreview from './blogPreview';
import Hero from './hero';
import Loading from './loading';
import useFech from './useFetch';
import '../css/animation.css'
const Home = () => {
  
   const data = useFech();
   

   
    return ( 
        <div id="home" className="bg-[#262A2E] h-screen w-screen ">
           <Hero />
            {/*logical form if the value was true the compiler excute the next part */ }
            
            {data && <BlogPreview  data={data} />}
        </div>
        
     );
}
 
export default Home;