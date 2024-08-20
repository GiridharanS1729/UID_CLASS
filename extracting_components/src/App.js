import React, { useState } from 'react';
import MainComponent from './MainComponent';
import './App.css'; 
const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <MainComponent isLoggedIn={isLoggedIn} />
      <button
        className={`btn ${isLoggedIn ? 'btn-logout' : 'btn-login'}`}
        onClick={toggleLoginStatus}
      >
        Toogle{isLoggedIn ? ' Logout ' : ' Login '}Status
      </button>
    </div>
  );
};

export default App;