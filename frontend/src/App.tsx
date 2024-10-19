import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/admindash'
import User from './pages/User'
import Navbar from './components/navbar'
import { useState } from 'react'
import UserInformationPage from './pages/UserInformationPage'

// Adjust the initial user data to match the UserInformationPage interface
const initialUserData = {
  lastName: '',
  firstName: '',
  middleInitial: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
  experiencedHomelessness: false,
  historyOfPreeclampsia: false,
  postpartumDepression: false,
};



function App() {
  const [editableUser, setEditableUser] = useState(initialUserData);

  // Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    // Handle checkbox inputs separately
    const newValue = type === 'checkbox' ? checked : value;

    setEditableUser(prevState => ({
      ...prevState,
      [name]: newValue, // Use checked value for checkboxes
    }));
  };

  // Function to handle the update action
  const handleUpdate = () => {
    // Implement your update logic here (e.g., API call)
    console.log('User updated:', editableUser);
  };
  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            path="/user-info"
            element={
              <UserInformationPage
                editableUser={editableUser}
                handleInputChange={handleInputChange}
                handleUpdate={handleUpdate}
              />
            }
          />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App