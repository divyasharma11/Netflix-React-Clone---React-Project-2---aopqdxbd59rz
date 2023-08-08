import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/loginpage/Login'

function App() {
 
  return (
     <BrowserRouter>
     <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Login />} />
     </Routes>
     </BrowserRouter>
    
  )
}

export default App
