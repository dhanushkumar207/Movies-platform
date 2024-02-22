import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';
import Movie from './Movie';
import Hotstar from './Hotstar';
import Amazon from './Amazon';
import Mxplayer from './Mxplayer';
import Zee5 from './Zee5';
import './App.css';
import './Style.css';
import {BrowserRouter, Routes,Link,Route} from 'react-router-dom';
import './index.css';  
import SearchBar from './SearchBar';
function App() {
  return (          
    <div className="App">
      <h1 className='style'>OTT FREE MOVIES</h1>
     <BrowserRouter>            
     <ul>
     <li><Link to='/home'>Home</Link></li>
      <li><Link to='/'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/admin'>Admin</Link></li>   
      <li><Link to='/search'>SearchBar</Link></li>
      
     </ul>
     <Routes>
     <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/login' element={<Login/>}/>  
      <Route path='/register' element={<Register />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/movie' element={<Movie/>}/>
      <Route path='/hotstar' element={<Hotstar/>}/>
      <Route path='/amazon' element={<Amazon/>}/>
      <Route path='/mx' element={<Mxplayer/>}/>
      <Route path='/zee' element={<Zee5/>}/>
      <Route path='/search' element={<SearchBar/>}/>
     </Routes>
     </BrowserRouter>

    </div>     
  );
}

export default App; 
               