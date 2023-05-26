import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Profile from "./Profile";

function App() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Signin />;
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <fragment>
          <Routes>
            <Route path='/profile' element={<Profile />} />

            <Route path='/' element={<Profile />} />
          </Routes>
        </fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
