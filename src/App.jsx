import { BrowserRouter as Router , Route , Routes    } from 'react-router-dom'
import './index.css'
import Navbar from './navbar/navbar'
import Home from './home/homePage'
import NewBlog from './newBlog/newBlog'
import BlogContent from './home/blogDetails'
import data from './blogsData/blogsData'
import SearchedWriter from './home/searchedWriter'
/*in react router v6 Routes insted of Routes*/

function App() {

  return (
    <Router>
        <div id="App">
          <Navbar />
          
          <Routes>
            <Route exact  path='/' element={<Home />} />
            <Route path='/New-Blog' element={<NewBlog />} />
            <Route path='/blogs/:ID' element={<BlogContent data={data} />} />
            <Route path='/search-by-writer' element={<SearchedWriter />} />
          </Routes>
         
          
          
         
      </div>
    </Router>
  )
}

export default App
