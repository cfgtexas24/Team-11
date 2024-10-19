import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import abide_logo from "../assets/abide_logo.png";
import { Button } from "./ui/button";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
  };

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) { // Check if the script is already loaded
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.id = "google-translate-script"; // Give the script a unique ID
        document.body.appendChild(script);
      }
    };
  
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  
    addGoogleTranslateScript();
  }, []);
  
  return (
    <header
      className="absolute top-0 left-0 right-0 flex justify-between items-center p-8 lg:px-24 z-30"
      id="logo_address"
    >
      <div className="flex items-center gap-4"> {}
        {/* Google Translate Dropdown */}
        <div 
          id="google_translate_element" 
          className="translate-dropdown"
          style={{ transform: "scale(0.8)", transformOrigin: "top left", marginRight: "10px" }} // Scale down and adjust spacing
        ></div>
        
        <img src={abide_logo} alt="Abide Logo" width={200} height={100} />
      </div>
      
      <div className="flex gap-0 lg:gap-6 items-center">
        <Button className="bg-[#3A696E] w-28" onClick={handleLogin}>Login</Button>
      </div>
    </header>
  );
};

export default Navbar;
