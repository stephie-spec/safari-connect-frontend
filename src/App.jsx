import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import UploadPage from './pages/UploadPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const API_BASE = '/api';

  useEffect(() => {
    fetch(`${API_BASE}/destinations`)
      .then(response => response.json())
      .then(data => setDestinations(data));

    fetch(`${API_BASE}/blogs`)
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  const handleLogin = () => {
    const demoUser = {
      id: 1,
      name: "Jane Doe",
      email: "demo@safariconnect.com"
    };
    setUser(demoUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addDestination = (destinationData) => {
    fetch(`${API_BASE}/destinations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(destinationData),
    })
      .then(response => response.json())
      .then(newDestination => {
        setDestinations(prev => [...prev, newDestination]);
      });
  };

  const addBlog = (blogData) => {
    fetch(`${API_BASE}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
      .then(response => response.json())
      .then(newBlog => {
        setBlogs(prev => [...prev, newBlog]);
      });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={
            <HomePage
              destinations={destinations}
              searchQuery={searchQuery}
              user={user}
              onLogout={handleLogout}
              onSearch={handleSearch}
            />
          } />
          <Route path="/blog" element={
            <BlogPage 
              blogs={blogs} 
              user={user}
              onLogout={handleLogout}
              onSearch={handleSearch}
            />
          } />
          <Route path="/upload" element={
            user ? (
              <UploadPage
                onDestinationAdded={addDestination}
                onBlogAdded={addBlog}
                user={user}
                onLogout={handleLogout}
                onSearch={handleSearch}
              />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          } />
          <Route path="/login" element={
            <LoginPage onLogin={handleLogin} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;