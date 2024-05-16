import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/App/ProfilePage'
import Dashboard from './pages/App/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landingpage from './pages/landingPage'
import Friends from './pages/App/friends'
import Sucursales from './pages/App/sucursales'



function app() {
  return (
<div   className=' dark:bg-neutral-900' >

    <AuthProvider> 
      <BrowserRouter >
      <Navbar/>
      
    <Routes> 
<Route path="/" element={   <Landingpage/>   } />
<Route path="/login" element={<LoginPage/>} />
<Route path="/register" element={<RegisterPage/>} />


<Route element={<ProtectedRoute/>}>
<Route path="/profile" element={ <ProfilePage/>  } />
<Route path="/Dashboard" element={ <Dashboard/>  } />
<Route path="/Amigos" element={ <Friends/>  } />
<Route path="/Sucursales" element={ <Sucursales/>  } />
</Route>


    </Routes>

     </BrowserRouter>
    </AuthProvider>
        

    </div>
  
  )
}
export default app