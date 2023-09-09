import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
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
import ComingSoon from './components/comingsoonpage/ComingSoon'
import RouterProtector from "./components/RouterProtector"

 const Router = createBrowserRouter([
   {
     path: "/",
     element: <Login />,
   },
   {
     path: "/signup",
     element: <Signup />,
   },
   {
     path: "/home",
     element: <RouterProtector element={<Home />} />,
   },
   {
     path: "/header",
     element: <RouterProtector element={<Header />} />,
   },
   {
     path: "/manage-profile",
     element: <RouterProtector element={<ManageProfile />} />,
   },

   {
     path: "/account",
     element: <RouterProtector element={<Account />} />,
   },
   {
     path: "/password",
     element: <RouterProtector element={<Password />} />,
   },
   {
      path:'/coming-soon' ,
      element :<RouterProtector  element={<ComingSoon/>} />,
   },
   {
     path: "/subscription",
     element: <RouterProtector element={<Subscription />} />,
   },
   {
     path: "/subscription-step2",
     element: <RouterProtector element={<SubscriptionStep />} />,
   },
   {
     path: "/payment-page",
     element: <RouterProtector element={<Payment />} />,
   },
   {
     path: "/my-list",
     element: <RouterProtector element={<MyMovieList />} />,
   },
   {
     path: "/movies",
     element: <RouterProtector element={<Movies />} />,
   },
   {
     path: "/tv-shows",
     element: <RouterProtector element={<TvShows />} />,
   },
 ]);
 export default Router;