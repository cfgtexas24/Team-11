import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import UserDashboard from './pages/UserDashboard'
import User from './pages/User'
import Navbar from './components/navbar'
import AdminDashboard from './pages/admindash'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path='/user' element={<User />}/>
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
