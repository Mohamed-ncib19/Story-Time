import { BrowserRouter as Router , Route , Routes    } from 'react-router-dom'
import './index.css'
import Navbar from './navbar/navbar'
import Home from './home/homePage'
import NewBlog from './newBlog/newBlog'
import BlogContent from './home/blogDetails'

import SearchedWriter from './home/searchedWriter'
import useFech from './home/useFetch'
/*in react router v6 Routes insted of Routes*/

function App() {
const data = useFech();
  return (
    <Router>
        <div id="App" className='bg-[#262A2E]' >
          <Navbar data={data} />
          
          <Routes>
            <Route exact  path='/Story-Time' element={<Home />}  />
            <Route path='/New-Blog' element={<NewBlog />} />
            <Route path='/blogs/:ID' element={<BlogContent data={data} />} />
            <Route path='/search-by-writer' element={<SearchedWriter />} />
          </Routes>
         
          
          
         
      </div>
    </Router>
  )
}

export default App
