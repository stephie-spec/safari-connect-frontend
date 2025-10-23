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
                <Card className="shadow">
                  <Card.Body className="p-5">
                    <div className="text-center mb-4">
                      <h3 className="fw-bold text-dark">Login Required</h3>
                      <p className="text-muted">
                        Authentication is required to upload new content to the platform
                      </p>
                    </div>

                    {/* Demo Login Form */}
                    <Card className="border-warning mb-4">
                      <Card.Body>
                        <div className="text-center mb-3">
                          <i className="fas fa-user-check text-warning fs-1 mb-3"></i>
                          <h5 className="fw-bold">Demo Access</h5>
                          <p className="text-muted small">
                            Use the pre-filled demo credentials to experience full upload capabilities
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
                            <Form.Text className="text-muted">
                              Demo email pre-filled
                            </Form.Text>
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
                            <Form.Text className="text-muted">
                              Demo password pre-filled
                            </Form.Text>
                          </Form.Group>

                          <Button 
                            variant="warning" 
                            type="submit"
                            className="w-100 py-2 fw-bold"
                          >
                            <i className="fas fa-rocket me-2"></i>
                            Enter Demo Mode with Upload Access
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>

                    {/* Demo Features */}
                    <Card className="bg-light">
                      <Card.Body>
                        <h6 className="fw-bold mb-3">What you can do in Demo Mode:</h6>
                        <div className="row">
                          <div className="col-6">
                            <small className="text-muted d-block mb-2">
                              <i className="fas fa-check text-success me-1"></i>Browse all destinations
                            </small>
                            <small className="text-muted d-block mb-2">
                              <i className="fas fa-check text-success me-1"></i>Read conservation blogs
                            </small>
                            <small className="text-muted d-block">
                              <i className="fas fa-check text-success me-1"></i>Search and filter content
                            </small>
                          </div>
                          <div className="col-6">
                            <small className="text-warning d-block mb-2 fw-bold">
                              <i className="fas fa-upload me-1"></i>Upload new destinations
                            </small>
                            <small className="text-warning d-block mb-2 fw-bold">
                              <i className="fas fa-edit me-1"></i>Write blog posts
                            </small>
                            <small className="text-warning d-block fw-bold">
                              <i className="fas fa-plus me-1"></i>Add conservation content
                            </small>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>

                    <div className="text-center mt-4">
                      <small className="text-muted">
                        This demo showcases the upload functionality. In production, users would register and login with their own credentials.
                      </small>
                    </div>
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