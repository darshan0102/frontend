import React from 'react'
import Home from './Home'
import Add from './Add'
import Edit from './Edit'
import Login from './Login'
import Profile from './Profile'
import Error from './Error'
import Navbar from '../Components/Navbar'
import { BrowserRouter  , Routes , Route } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='container mx-auto'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/edit' element={<Edit/>}></Route>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout