// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import Landing from './pages/Landing';
// We will create these in Step 2 & 3:
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';

export default function App() {
  const [user, setUser] = useState(null);
  const [route, setRoute] = useState('landing'); // 'landing', 'login', 'register', 'dashboard'
  const [isLoading, setIsLoading] = useState(false); // Set to true once Firebase is hooked up

  // Placeholder for Firebase Auth (We will build this in Step 2)
  useEffect(() => {
    // Simulate initial load
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-50">
        <Shield className="w-16 h-16 text-orange-600 animate-pulse mb-6" />
        <div className="text-slate-500 font-medium tracking-widest uppercase text-sm">Loading Enterprise Portal...</div>
      </div>
    );
  }

  // Routing Logic
  switch (route) {
    case 'landing':
      return <Landing setRoute={setRoute} />;
    case 'login':
      // return <Login setRoute={setRoute} setUser={setUser} />;
      return <div className="p-10 text-center">Login Page (Coming in Step 2) <button onClick={() => setRoute('landing')} className="text-blue-500 underline ml-4">Back</button></div>;
    case 'register':
      // return <Register setRoute={setRoute} setUser={setUser} />;
      return <div className="p-10 text-center">Register Page (Coming in Step 2) <button onClick={() => setRoute('landing')} className="text-blue-500 underline ml-4">Back</button></div>;
    case 'dashboard':
      // return <Dashboard setRoute={setRoute} user={user} />;
      return <div className="p-10">Dashboard</div>;
    default:
      return <Landing setRoute={setRoute} />;
  }
}
