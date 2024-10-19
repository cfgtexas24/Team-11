import { useState } from "react";
import { useNavigate } from "react-router-dom";
import abide_logo from "../assets/abide_logo.png";
import { Button } from "./ui/button";
import { CgProfile } from "react-icons/cg"; // Import profile icon

const AdminNavbar = () => {
  const navigate = useNavigate();
  
  // State to toggle the dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Navigate to personal information page
    navigate("/");
    setDropdownVisible(false);
  };

  // Navigate to the dashboard
  const goToDashboard = () => {
    navigate("/admin-dashboard");
  };

  // Navigate to the client list
  const goToClientList = () => {
    navigate("/client-list");
  };

  return (
    <div>
      <header
        className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 lg:px-24 z-30 border"
        id="logo_address"
      >
        <img src={abide_logo} alt="Abide Logo" width={160} height={80} />

        <div className="flex items-center gap-4"> {/* Container for the nav buttons */}
          {/* Button to go to the Dashboard */}
          <Button className="bg-[#3A696E]" onClick={goToDashboard}>
            Dashboard
          </Button>

          {/* Button to go to the Client List */}
          <Button className="bg-[#3A696E]" onClick={goToClientList}>
            Client List
          </Button>

          {/* Profile dropdown */}
          <div className="relative"> {/* Wrap in a relative div to position the dropdown */}
            <Button
              className="bg-[#3A696E] w-28 flex items-center justify-center"
              onClick={toggleDropdown} // Toggle the dropdown on click
            >
              <CgProfile className="mr-2" /> {/* Profile icon */}
            </Button>

            {/* Dropdown menu */}
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-40">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default AdminNavbar;
