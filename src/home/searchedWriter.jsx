import React from 'react';
import Hero from './hero';
import BlogPreview from './blogPreview'
import {useLocation} from 'react-router-dom'
const SearchedWriter = () => {
  const location = useLocation();
  const searchResult = location.state || [];
   return (
    <div id="SearchedWriter" className="bg-[#262A2E] w-full h-screen flex justify-center items-center">
      <Hero />
      <div>
        
       {searchResult && <BlogPreview data={searchResult} />}
      </div>
    </div>
  );
};

export default SearchedWriter;
