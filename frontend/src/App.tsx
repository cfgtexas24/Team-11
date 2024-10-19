import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import UserDashboard from './pages/UserDashboard'
import User from './pages/User'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path='/user' element={<User />}/>
          <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
