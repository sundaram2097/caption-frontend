
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Monday from './Component/Monday'
import Tuesday from './Component/Tuesday'
import Wednesday from './Component/Wednesday'
import Thursday from './Component/Thursday'
import Friday from './Component/Friday'
import Saturday from './Component/Saturday'
import Sunday from './Component/Sunday'
import Register from './Component/Register'
import Login from './Component/Login'
import { Routes,Route } from 'react-router-dom' 

function App() {
  return<>
  <div className='container-fluid'>
  <Navbar/>
  
  <Routes>
    <Route path='*' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/monday' element={<Monday/>}/>
    <Route path='/tuesday' element={<Tuesday/>}/>
    <Route path='/wednesday' element={<Wednesday/>}/>
    <Route path='/thursday' element={<Thursday/>}/>
    <Route path='/friday' element={<Friday/>}/>
    <Route path='/saturday' element={<Saturday/>}/>
    <Route path='/sunday' element={<Sunday/>}/>
  </Routes>
  </div>
  </>
}

export default App;
