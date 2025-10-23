import React, { useState } from 'react';
import { Navbar, Form, InputGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout, onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
      onLogout();
    navigate('/explore');
  };

  const handleSearch = (e) => {
    e.preventDefault();
      onSearch(searchQuery);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/explore" className="d-flex align-items-center">
        <img
          src="data/images/safariconnect.png"
          width="50"
          height="50"
          className="d-inline-block align-top me-2 rounded"
          alt="Safari Connect logo"
        />
        <div className="logo-text">
          <p className="mb-0 text-light">Connecting Natural Wonders</p>
        </div>
      </Navbar.Brand>
      
      <div className="ms-auto d-flex align-items-center">
        {onSearch && (
          <Form onSubmit={handleSearch} className="me-3">
            <InputGroup style={{ width: '250px' }}>
              <Form.Control
                type="text"
                placeholder="Search destinations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-light" type="submit">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form>
        )}

        {user && (
          <div className="d-flex align-items-center">
            <span className="text-light me-3 d-none d-md-block">Hello, {user.name}</span>
            <Button variant="outline-light" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </Navbar>
  );
};

export default Header;