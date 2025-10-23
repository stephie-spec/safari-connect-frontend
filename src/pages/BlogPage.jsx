import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const BlogPage = ({ blogs, user, onLogout, onSearch }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="App">
        <Header user={user} onLogout={onLogout} onSearch={onSearch} />
        <Container fluid className="mt-3">
          <Row>
            <Col md={3}>
              <Sidebar user={user} />
            </Col>
            <Col md={9}>
              <div className="text-center py-5">
                <h2>Conservation Blog</h2>
                <p className="text-muted">No blog posts yet. Be the first to share a conservation story!</p>
              </div>
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
  }

  return (
    <div className="App">
      <Header user={user} onLogout={onLogout} onSearch={onSearch} />
      <Container fluid className="mt-3">
        <Row>
          <Col md={3}>
            <Sidebar user={user} />
          </Col>
          <Col md={9}>
            <div className="mb-4">
              <h2>Conservation Blog</h2>
              <p className="text-muted">Stories from the frontlines of wildlife conservation</p>
            </div>
            
            <Row>
              {blogs.map(blog => (
                <Col key={blog.id} lg={8} className="mb-4 mx-auto">
                  <Card className="blog-card">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <span className="badge bg-warning text-dark">{blog.category}</span>
                      </div>
                      
                      <Card.Title className="h3 mb-3">{blog.title}</Card.Title>
                      
                      <div className="blog-content">
                        {blog.content.split('\n').map((paragraph, index) => (
                          <p key={index} className="mb-3">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-3 border-top">
                        <small className="text-muted">
                          Category: {blog.category}
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
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

export default BlogPage;