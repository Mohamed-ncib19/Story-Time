import { useState } from "react";
const SenderData = (props) =>{
    const [searchValue, setSearchValue] = useState('');
  const searchResult = [];

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSearch = () => {
    const result = props.filter((blog) => blog.author === searchValue);
    searchResult +=result
    
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchValue !== '') {
      handleSearch();
    }
  };
  
  return {searchResult ,searchValue, handleKeyPress ,handleSearchInputChange };
}
export default SenderData;