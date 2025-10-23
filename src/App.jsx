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

  const DESTINATIONS_API = 'https://68fa13b4ef8b2e621e7eae35.mockapi.io/destinations';
  const BLOGS_API = 'https://68fa13b4ef8b2e621e7eae35.mockapi.io/blogs';

  useEffect(() => {
    fetchDestinations();
    fetchBlogs();
  }, []);

  const fetchDestinations = () => {
    fetch(DESTINATIONS_API)
      .then(response => response.json())
      .then(data => {
        setDestinations(data || []);
      })
      .catch(error => {
        console.error('Error fetching destinations:', error);
        setDestinations([]);
      });
  };

  const fetchBlogs = () => {
    fetch(BLOGS_API)
      .then(response => response.json())
      .then(data => {
        setBlogs(data || []);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      });
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addDestination = (destinationData) => {
    fetch(DESTINATIONS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(destinationData),
    })
      .then(response => response.json())
      .then(newDestination => {
        setDestinations(prev => [...prev, newDestination]);
      })
      .catch(error => {
        console.error('Error adding destination:', error);
      });
  };

  const addBlog = (blogData) => {
    fetch(BLOGS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
      .then(response => response.json())
      .then(newBlog => {
        setBlogs(prev => [...prev, newBlog]);
      })
      .catch(error => {
        console.error('Error adding blog:', error);
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
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;