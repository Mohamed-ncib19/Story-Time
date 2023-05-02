import BlogPreview from './blogPreview';
import Hero from './hero';
import Loading from './loading';
import useFech from './useFetch';

const Home = () => {
   const {data,isLoading} = useFech()
    
   
    return ( 
        <div id="home" className="bg-[#262A2E] h-screen w-screen">
            <Hero />
            {/*logical form if the value was true the compiler excute the next part*/ }
            {isLoading && <Loading  />}
            {data && <BlogPreview  data={data} />}
          
        </div>
     );
}
 
export default Home;