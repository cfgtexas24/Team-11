import { useState } from "react";
import { useNavigate } from "react-router-dom";
import abide_logo from "../assets/abide_logo.png";
import { Button } from "./ui/button";
import { CgProfile } from "react-icons/cg"; // Import profile icon

const LoginNavbar = () => {
  const navigate = useNavigate();
  
  // State to toggle the dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    navigate("/");
    setDropdownVisible(false);
    console.log("Logged out");
  };

  const handlePersonalInfo = () => {
    navigate("/user-info");
    setDropdownVisible(false);
  };

  // Function to navigate to home page when logo is clicked
  const handleLogoClick = () => {
    navigate("/user-dashboard"); // Navigate to the home page or any other page
  };

  return (
    <div>
      <header
        className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 lg:px-8 z-30 border"
        id="logo_address"
      >
        {/* Logo that acts as a clickable element to navigate */}
        <img
          src={abide_logo}
          alt="Abide Logo"
          width={160}
          height={80}
          className="cursor-pointer" // Change cursor to pointer on hover
          onClick={handleLogoClick} // Navigate to the home page on click
        />

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
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handlePersonalInfo}>
                  Personal Information
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default LoginNavbar;
