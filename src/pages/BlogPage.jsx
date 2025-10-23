import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
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
              <p>No blog posts yet.</p>
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
            <h2 className="mb-4">Blog</h2>
            <Row>
              {blogs.map(blog => (
                <Col key={blog.id} lg={6} className="mb-4">
                  <Card className="h-100">
                    <Card.Img 
                      variant="top" 
                      src={blog.image} 
                      alt={blog.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <div className="mb-2">
                        {blog.tags && blog.tags.map((tag, index) => (
                          <Badge key={index} bg="secondary" className="me-1 mb-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text className="flex-grow-1 text-muted">
                        {blog.excerpt}
                      </Card.Text>
                      <div className="mt-auto pt-3 border-top">
                        <small className="text-muted">
                          By {blog.author} • {blog.date}
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