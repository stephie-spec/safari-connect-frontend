import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BlogDetail = ({ blog, onBack }) => {
  if (!blog) {
    return (
      <div className="alert alert-danger text-center">
        <h4>Blog Post Not Found</h4>
        <Button onClick={onBack} className="mt-2">
          Back to All Blogs
        </Button>
      </div>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Button variant="outline-secondary" onClick={onBack} className="mb-4">
          <i className="bi bi-arrow-left me-2"></i>Back to All Blogs
        </Button>

        <div className="mb-3">
          <span className="badge bg-warning text-dark fs-6">{blog.category}</span>
        </div>
        
        <h1 className="mb-4">{blog.title}</h1>
        
        <div className="mb-4">
          <small className="text-muted">
            <i className="bi bi-calendar me-1"></i>
            Published on {blog.date || 'Recent'}
          </small>
        </div>

        <div className="blog-content">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-3 fs-6 lh-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-5 pt-4 border-top">
          <Button variant="outline-secondary" onClick={onBack}>
            <i className="bi bi-arrow-left me-2"></i>Back to All Blogs
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogDetail;