import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BlogDetail = ({ blog, onBack }) => {

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

        <div className="blog-content">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-3 fs-6 lh-base">
              {paragraph}
            </p>
          ))}
        </div>

      </Card.Body>
    </Card>
  );
};

export default BlogDetail;