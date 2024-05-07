import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
   < BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
         <Route path='/About' element = {<About/>}></Route>
        <Route path='/Profile' element = {<Profile/>}></Route>
        <Route path='/Sign-In' element = {<SignIn/>}></Route>
        <Route path='/Sign-Up' element = {<SignUp/>}></Route> 
      
        
      </Routes>
   </BrowserRouter>
  
    

  )
}

export default App