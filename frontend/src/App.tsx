import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import UserDashboard from './pages/UserDashboard'
import Navbar from './components/navbar'
import AdminDashboard from './pages/admindash'
import DataTable from './pages/DataTable';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-data-table" element={<DataTable />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
