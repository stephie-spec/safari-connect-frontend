import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ user }) => {
  const location = useLocation();

  const navItems = [
    { path: '/explore', icon: 'fas fa-home', label: 'Home' },
    { path: '/blog', icon: 'fas fa-square-rss', label: 'Blog' },
    ...(user ? [{ path: '/upload', icon: 'fas fa-cloud-arrow-up', label: 'Upload Content' }] : []),
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
            
            {!user && (
              <Nav.Link
                as={Link}
                to="/login"
                className="d-flex align-items-center mb-2 text-dark"
              >
                <i className="fas fa-sign-in-alt me-2" style={{ width: '20px' }}></i>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Card.Body>
      </Card>

      {/* Upload Info Card - Only show when not logged in */}
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
              <div className="d-grid gap-2">
                <small className="text-muted">
                  <i className="fas fa-plus me-1 text-warning"></i>Add new destinations
                </small>
                <small className="text-muted">
                  <i className="fas fa-edit me-1 text-warning"></i>Write blog posts
                </small>
                <small className="text-muted">
                  <i className="fas fa-images me-1 text-warning"></i>Upload photos
                </small>
              </div>
            </div>
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