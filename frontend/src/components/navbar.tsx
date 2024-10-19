import { useNavigate } from "react-router-dom";
import abide_logo from "../assets/abide_logo.png";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
  };
  return (
    <header
      className="absolute top-0 left-0 right-0 flex justify-between items-center p-8 lg:px-24 z-30"
      id="logo_address"
    >
      <img src={abide_logo} alt="Abide Logo" width={160} height={80} />
      <div className="flex gap-0 lg:gap-6 items-center">
        <Button className="bg-[#3A696E] w-28" onClick={handleLogin}>Login</Button>
      </div>
    </header>
  );
};

export default Navbar;