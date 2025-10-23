import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ user }) => {
  const location = useLocation();

  const navItems = [
    { path: '/explore', icon: 'fas fa-home', label: 'Home' },
    { path: '/blog', icon: 'fas fa-square-rss', label: 'Blog' },
  ];

  return (
    <div className="sidebar-sticky">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="border-bottom pb-2 mb-3">Explore</Card.Title>
          <Nav className="flex-column">
            {navItems.map(item => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`d-flex align-items-center mb-2 ${
                  location.pathname === item.path ? 'active bg-light text-dark rounded' : 'text-dark'
                }`}
              >
                <i className={`${item.icon} me-2`} style={{ width: '20px' }}></i>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Card.Body>
      </Card>

      {/* Upload Access Section with Button */}
      {!user && (
        <Card className="mb-3 border-warning">
          <Card.Body>
            <Card.Title className="border-bottom pb-2 mb-3">
              <i className="fas fa-lock me-2 text-warning"></i>Upload Access
            </Card.Title>
            <div className="text-center">
              <p className="small text-muted mb-3">
                Sign in to contribute your own conservation stories and destinations
              </p>
              
              {/* Upload Button */}
              <Button 
                as={Link}
                to="/login"
                variant="warning" 
                className="w-100 mb-3"
              >
                <i className="fas fa-sign-in-alt me-2"></i>
                Login to Upload
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}

      {/* Show Upload link only when user is logged in */}
      {user && (
        <Card className="mb-3">
          <Card.Body>
            <Nav className="flex-column">
              <Nav.Link
                as={Link}
                to="/upload"
                className={`d-flex align-items-center mb-2 ${
                  location.pathname === '/upload' ? 'active bg-light text-dark rounded' : 'text-dark'
                }`}
              >
                <i className="fas fa-cloud-arrow-up me-2" style={{ width: '20px' }}></i>
                Upload Content
              </Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
      )}

      {/* Conservation Stats */}
      <Card>
        <Card.Body>
          <Card.Title className="border-bottom pb-2 mb-3">Conservation Stats</Card.Title>
          <div className="stats">
            <p className="mb-2">
              <i className="fas fa-paw me-2"></i>15+ Protected Areas
            </p>
            <p className="mb-2">
              <i className="fas fa-tree me-2"></i>100+ Species
            </p>
            <p className="mb-0">
              <i className="fas fa-users me-2"></i>50K+ Visitors
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;