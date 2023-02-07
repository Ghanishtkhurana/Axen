import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Account/Login'
import SignIn from './Account/SignIn'
import Cart from './cart/Cart'
import Electronic from './Electronics/Electronic'
import Fashion from './Fashion'
import Grocery from './Grocery/Grocery'
import Home from './Home/Home'
import HomePro from './HomeProduct/HomePro'
import Mobile from './Mobile/Mobile'
import SinglePage from './SingleProduct/SinglePage'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/singlepage/:id' element={<SinglePage />} />
      <Route path='/mobile' element={<Mobile />} />
      <Route path='/grocery' element={<Grocery />} />
      <Route path='/electronic' element={<Electronic />} />
      <Route path='/home' element={<HomePro />} />
      <Route path='/fashion' element={<Fashion />} />
    </Routes>
  )
}

export default Allroutes
