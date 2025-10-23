import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ user }){
  const location = useLocation();

const navItems = [
    { path: '/explore', icon: 'bi-house', label: 'Home' },
    { path: '/blog', icon: 'bi-journal-text', label: 'Conservation Blog' },
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

      {!user && (
        <Card className="mb-3 border-warning">
          <Card.Body>
            <Card.Title className="border-bottom pb-2 mb-3">
              <i className="bi bi-lock me-2 text-warning"></i>Upload Access
            </Card.Title>
            <div className="text-center">
              <p className="small text-muted mb-3">
                Sign in to contribute your own conservation stories and destinations
              </p>
              
              <Button 
                as={Link}
                to="/login"
                variant="warning" 
                className="w-100 mb-3"
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login to Upload
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}

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
                <i className="bi bi-cloud-arrow-up me-2" style={{ width: '20px' }}></i>
                Upload Content
              </Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
      )}

      <Card>
        <Card.Body>
          <Card.Title className="border-bottom pb-2 mb-3">Conservation Stats</Card.Title>
          <div className="stats">
            <p className="mb-2">
              <i className="bi bi-shield-check me-2"></i>15+ Protected Areas
            </p>
            <p className="mb-2">
              <i className="bi bi-tree me-2"></i>100+ Species
            </p>
            <p className="mb-0">
              <i className="bi bi-people me-2"></i>50K+ Visitors
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;