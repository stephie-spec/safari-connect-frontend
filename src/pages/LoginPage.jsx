import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');

  const handleDemoLogin = () => {
    const userData = {
      id: 1,
      name: 'Demo User',
      email: email,
    };
    onLogin(userData);
    navigate('/explore');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleDemoLogin();
  };

  return (
    <div className="App">
      <Header />
      <Container fluid className="mt-3">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Row className="justify-content-center align-items-center min-vh-50">
              <Col md={8} lg={6}>
                <Card>
                  <Card.Body className="p-5">
                    <div className="text-center mb-4">
                      <h3 className="fw-bold text-dark">Login</h3>
                    </div>

                    <Card className="mb-4">
                      <Card.Body>
                        <div className="text-center mb-3">
                          <i className="fas fa-user-check text-warning fs-1 mb-3"></i>
                          <h5 className="fw-bold">Demo Login</h5>
                          <p className="text-muted small">
                            Use the pre-filled demo credentials
                          </p>
                        </div>

                        <Form onSubmit={handleFormSubmit}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="bg-light"
                              readOnly
                            />
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="bg-light"
                              readOnly
                            />
                          </Form.Group>

                          <Button 
                            variant="warning" 
                            type="submit"
                            className="w-100 py-2 fw-bold"
                          >
                            <i className="fas fa-rocket me-2"></i>
                            Login
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="footer-content">
          <p>Safari Connect - Connecting Natural Wonders</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;