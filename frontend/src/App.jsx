import React from 'react'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import ProtectedRoutes from './components/ProtectedRoutes'

import {Routes,Route,Navigate} from 'react-router-dom'

const App = () => {
  const Logout=()=>{
    localStorage.clear();
    <Navigate to='/login'/>
  }

  const RegisterandLogOut=()=>{
    localStorage.clear();
    return <Register/>
  }
  return (
    <div>
        <Routes>
          <Route path='/login' element={Login}/>
          <Route path='/register' element={RegisterandLogOut}/>
          <Route
          path='/'
          element={
            <ProtectedRoutes>
              <Home/>
            </ProtectedRoutes>
          }
          />
        </Routes>
    </div>
  )
}

export default App
