import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BlogsGrid from '../components/BlogsGrid';
import BlogDetail from '../components/BlogDetail';

const BlogPage = ({ blogs, user, onLogout, onSearch }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="App">
      <Header user={user} onLogout={onLogout} onSearch={onSearch} />
      <Container fluid className="mt-3">
        <Row>
          <Col md={3}>
            <Sidebar user={user} />
          </Col>
          <Col md={9}>
            <main className="main-content">
              {selectedBlog ? (
                <BlogDetail 
                  blog={selectedBlog} 
                  onBack={() => setSelectedBlog(null)}
                />
              ) : (
                <>
                  <div className="mb-4">
                    <h2>Conservation Blog</h2>
                    <p className="text-muted">From our community members</p>
                  </div>
                  <BlogsGrid 
                    blogs={blogs}
                    onViewBlog={setSelectedBlog}
                  />
                </>
              )}
            </main>
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