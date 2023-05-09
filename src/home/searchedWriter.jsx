import React from 'react';
import Hero from './hero';
import BlogPreview from './blogPreview'
import {useLocation} from 'react-router-dom'
const SearchedWriter = () => {
  const location = useLocation();
  const searchResult = location.state.searchResult || [];
   return (
    <div id="SearchedWriter" className="bg-[#262A2E] w-screen h-screen  m-auto">
      <Hero />
      <div className=' bg-[#262A2E] h-screen w-screen'>
        
       {searchResult && <BlogPreview data={searchResult} />}
      </div>
    </div>
  );
};

export default SearchedWriter;
