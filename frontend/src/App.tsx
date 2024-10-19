
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import UserDashboard from './pages/UserDashboard';
import User from './pages/User';
import Navbar from './components/navbar';
import { useState, useEffect } from 'react';
import UserInformationPage from './pages/UserInformationPage';
import ProviderUserInfo from './pages/ProviderUserInfo';


// Adjust the initial user data
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
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [usersList, setUsersList] = useState<any[]>([]); // Fetching users from MongoDB

  // Fetch users from MongoDB (API call)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api'); // Replace with your API endpoint
        const data = await response.json();
        setUsersList(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle user selection from the dropdown
  const handleUserSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = parseInt(event.target.value, 10);
    const selectedUser = usersList.find((user) => user._id === userId); // MongoDB uses _id
    if (selectedUser) {
      setEditableUser(selectedUser);
      setSelectedUserId(userId);
    }
  };
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [usersList, setUsersList] = useState<any[]>([]); // Fetching users from MongoDB

  // Fetch users from MongoDB (API call)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Replace with your API endpoint
        const data = await response.json();
        setUsersList(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle user selection from the dropdown
  const handleUserSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = parseInt(event.target.value, 10);
    const selectedUser = usersList.find((user) => user._id === userId); // MongoDB uses _id
    if (selectedUser) {
      setEditableUser(selectedUser);
      setSelectedUserId(userId);
    }
  };

  // Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setEditableUser(prevState => ({
      ...prevState,
      [name]: newValue,
      [name]: newValue,
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
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            path="/user-info"
            element={
              <UserInformationPage
                // editableUser={editableUser}
                // handleInputChange={handleInputChange}
                // handleUpdate={handleUpdate}
              />
            }
          />
          <Route
            path="/provider-user-info"
            element={
              <ProviderUserInfo
                // editableUser={editableUser}
                // handleInputChange={handleInputChange}
                // handleUpdate={handleUpdate}
                // handleUserSelect={handleUserSelect}
                // usersList={usersList}
                // selectedUserId={selectedUserId}
                // editableUser={editableUser}
                // handleInputChange={handleInputChange}
                // handleUpdate={handleUpdate}
              />
            }
          />
          <Route
            path="/provider-user-info"
            element={
              <ProviderUserInfo
                // editableUser={editableUser}
                // handleInputChange={handleInputChange}
                // handleUpdate={handleUpdate}
                // handleUserSelect={handleUserSelect}
                // usersList={usersList}
                // selectedUserId={selectedUserId}
              />
            }
          />
        </Routes>
      </BrowserRouter>
        </Routes>
      </BrowserRouter>
    </div>
  );
  );
}

export default App;