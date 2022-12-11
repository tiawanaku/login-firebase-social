import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Auth from './pages/Auth';
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [users, setUser] = useState(null);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user)
    } else {
      console.log('No user is signed in.');
    }
  })
}, []);

  return (
    <div >
      <BrowserRouter>
        {users?.accessToken && <Navbar/>}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="dashboard" element={<Home users={users}/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        theme="light"
      />
    </div>
  );
}

export default App;
