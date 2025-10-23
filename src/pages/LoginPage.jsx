import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    onLogin();
    navigate('/explore');
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
            <Row className="justify-content-center">
              <Col md={6} lg={4}>
                <Card className="shadow">
                  <Card.Body className="p-4 text-center">
                    <h3 className="mb-3">Welcome to Safari Connect</h3>
                    <p className="text-muted mb-4">
                      Experience the demo version to explore conservation destinations
                    </p>

                    <Button 
                      variant="warning" 
                      className="w-100 py-3 fw-bold"
                      onClick={handleDemoLogin}
                    >
                      Enter Demo Mode
                    </Button>

                    <div className="mt-4 p-3 bg-light rounded">
                      <small className="text-muted">
                        Demo features include:<br/>
                        • Browse destinations<br/>
                        • Read conservation stories<br/>
                        • Upload new content<br/>
                        • Search and filter
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