// src/Components/TimerContext.js
import React, { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
    }, 90000); // 1 minute 30 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <TimerContext.Provider value={{ showPopup }}>
      {children}
      {showPopup && (
        <div className="popup">
          <p>Time's up! Take a break!</p>
        </div>
      )}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
