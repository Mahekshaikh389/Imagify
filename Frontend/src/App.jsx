import { Routes, Route } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import Home from './pages/Home';
import BuyCradit from './pages/BuyCradit';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { AppContext } from './context/AppContext';
import { ToastContainer } from 'react-toastify';


const App = () => {

  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='buttom-right' />
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/Buy' element={<BuyCradit/>} />
      </Routes>
    
      
    </div>
  )
}

export default App
