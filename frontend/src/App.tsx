import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInformationPage from './pages/UserInformationPage'; // Import the UserInformationPage component
import { useState } from 'react';

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
      <Navbar/>
      <Routes>
        {/* Add the route for the User Information Page */}
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
  );
}

export default App;
