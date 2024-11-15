import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [accessToken, setAccessToken] = useState(null);

  // Capture the authorization code from URL parameters
  const code = new URLSearchParams(window.location.search).get('code');

  useEffect(() => {
    if (!code) return;

    const fetchAccessToken = async () => {
      try {
        const response = await fetch('http://localhost:3001/getAccessToken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });
        
        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchAccessToken();
  }, [code]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={accessToken ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={<Dashboard accessToken={accessToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
