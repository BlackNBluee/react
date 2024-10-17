
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Nothing from './pages/Nothing'
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";



function App() {

  const [isLoggedIn, setIsLoggedIn]= useState(false);


  return (

    <div className="flex w-screen h-full bg-richblack-900 flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
        <Route path="*" element={<Nothing/>}/>
      </Routes>
    </div>
  );
}

export default App;
