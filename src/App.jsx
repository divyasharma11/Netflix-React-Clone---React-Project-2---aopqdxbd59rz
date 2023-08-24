import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/loginpage/Login'
import Signup from './components/Signuppage/signup'
import MyMovieList from './components/page/MyMovieList'
import Movies from './components/page/Movies'
import TvShows from './components/page/TvShows'
import Subscription from './components/SubscriptionPage/Subscription'
import SubscriptionStep from './components/SubscriptionPage/SubscriptionStep'
import Payment from './components/SubscriptionPage/Payment'
import Account from './components/page/Account'
import Password from './components/page/Password'
import Header from './components/header/Header'
import ManageProfile from './components/page/ManageProfile'

function App() {
 
  return (
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/my-list' element={<MyMovieList />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tv-shows' element={<TvShows />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/subscription-step2' element={<SubscriptionStep />} />
        <Route path='/payment-page' element={<Payment />} />
        <Route path='/account' element={<Account />} />
        <Route path='/password' element={<Password />} />
        <Route path='/header' element={<Header />} />
        <Route path='/manage-profile' element={<ManageProfile />} />
     </Routes>
     </BrowserRouter> 
  )
}

export default App
