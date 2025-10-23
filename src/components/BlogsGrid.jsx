import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';

const BlogsGrid = ({ blogs, onViewBlog }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-5">
        <h5>No blog posts yet</h5>
        <p className="text-muted">Be the first to share a conservation story!</p>
      </div>
    );
  }

  return (
    <Row>
      {blogs.map(blog => (
        <Col key={blog.id} xs={12} md={6} lg={4} className="mb-4">
          <Card 
            className="h-100 blog-card" 
            onClick={() => onViewBlog(blog)}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body className="d-flex flex-column">
              <Badge bg="warning" text="dark" className="mb-2 align-self-start">
                {blog.category}
              </Badge>
              <Card.Title className="fs-5 fw-bold">{blog.title}</Card.Title>
              <Card.Text className="flex-grow-1 text-muted">
                {blog.content.substring(0, 120) + '...'}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                <small className="text-muted">
                  <i className="bi bi-calendar me-1"></i>
                  {blog.date || 'Recent'}
                </small>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewBlog(blog);
                  }}
                >
                  Read More
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BlogsGrid;