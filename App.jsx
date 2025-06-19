import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import { IoMoon, IoSunny } from "react-icons/io5";

function App() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(prev => !prev);
    document.documentElement.classList.toggle('dark'); // Tailwind dark mode
  };

  return (
    <div className={`relative min-h-screen ${dark ? 'dark bg-blue-900' : 'bg-white'}`}>
      {/* Toggle Button - Bottom Left */}
      <button 
        onClick={darkModeHandler} 
        className="fixed bottom-4 left-4 p-3 text-2xl bg-white dark:bg-gray-800 rounded-full shadow-lg"
      >
        {dark ? <IoSunny /> : <IoMoon />}
      </button>

      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
