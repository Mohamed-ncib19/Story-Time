import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);

  };
const data = props.data;


const handleSearch = () => {
  const searchResult = [];

  data.forEach((item) => {
    const author = item.todo.author.toLowerCase();
    const title = item.todo.title.toLowerCase();
    const searchValueLower = searchValue.toLowerCase();

    if (author.includes(searchValueLower) || title.includes(searchValueLower)) {
      searchResult.push(item);
    }
  });

  if (searchResult.length > 0) {
    setSearchValue('');
    navigate('/search-by-writer', { state: { searchResult } });
  } else {
    alert('Blog not found');
  }
};













  return (
    <Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
          <StyledInputBase
            type="text"
            placeholder="Author | Title"
            value={searchValue}
            onChange={handleSearchInputChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }}}
            
          />
      </Search>
    </Toolbar>
  );
}
 
