import { useState } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import FormDetails from './pages/formDetails';
import Comp from './pages/comp';

function App() {
  

  return (
    <>
    
          <Router>
      <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/doctors' element={<Comp/>}/>
          <Route path='/giveDetails' element={<FormDetails/>}/>



        </Routes>
      </Router>
    

    </>
  )
}

export default App;
