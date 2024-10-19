import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import UserDashboard from './pages/UserDashboard'
import Navbar from './components/navbar'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
