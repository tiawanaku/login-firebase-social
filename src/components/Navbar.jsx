import { signOut } from "firebase/auth";
import React from "react";
import "../styles/components/Navbar.css";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const logoutFunc = async () => {
    toast.success("primer punto...");
    await signOut(auth);
    setTimeout(() => {
      window.location = "/";
    }, 5000);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">FIREBASE</div>
      <div onClick={logoutFunc} className="navbar-right">
        Logout
      </div>
    </div>
  );
};

export default Navbar;
