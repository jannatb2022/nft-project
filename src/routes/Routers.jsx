import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Create from '../pages/Create'
import Editprofile from '../pages/Editprofile'
import Home from '../pages/Home'
import Market from '../pages/Market'
import Nftdetails from '../pages/Nftdetails'
import Sellerprofile from '../pages/Sellerprofile'
import Wallet from '../pages/Wallet'
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/editprofile' element={<Editprofile />}/>
        <Route path='/market' element={<Market />}/>
        <Route path='/market/:id' element={<Nftdetails />}/>
        <Route path='/nftdetails' element={<Nftdetails />}/>
        <Route path='/sellerprofile' element={<Sellerprofile />}/>
        <Route path='/wallet' element={<Wallet />}/>
      </Routes>
    </div>
  )
}

export default Routers