import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import './index.css'
import Navbar from './navbar/navbar'
import Home from './home/homePage'
import NewBlog from './newBlog/newBlog'
import BlogContent from './home/blogDetails'
import data from './blogsData/blogsData'
/*in react router v6 Routes insted of Routes*/

function App() {

  return (
    <Router>
        <div id="App" className="">
          <Navbar />
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/New-Blog' element={<NewBlog />} />
            <Route path='/blogs/:ID' element={<BlogContent data={data} />} />
            
          </Routes>
      </div>
    </Router>
  )
}

export default App
