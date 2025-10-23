import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const UploadPage = ({ onDestinationAdded, onBlogAdded, user, onLogout, onSearch }) => {
  const [activeTab, setActiveTab] = useState('destination');
  const navigate = useNavigate();

  const [destinationForm, setDestinationForm] = useState({
    name: '',
    category: '',
    location: '',
    description: '',
    image: '',
    keyFeature: '',
    area: '',
    established: '',
    conservationStatus: ''
  });

  const [blogForm, setBlogForm] = useState({
    title: '',
    content: '',
    category: 'Learn'
  });

  const handleDestinationSubmit = (e) => {
    e.preventDefault();
    
    const destinationData = {
      name: destinationForm.name,
      category: destinationForm.category,
      location: destinationForm.location,
      description: destinationForm.description,
      images: [destinationForm.image || '/images/default-destination.jpg'],
      keyFeature: destinationForm.keyFeature || 'Not specified',
      area: destinationForm.area || 'Not specified',
      established: destinationForm.established || 'Unknown',
      conservationStatus: destinationForm.conservationStatus || 'Not specified'
    };

    onDestinationAdded(destinationData);
    setDestinationForm({ 
      name: '', category: '', location: '', description: '', image: '',
      keyFeature: '', area: '', established: '', conservationStatus: ''
    });
    navigate('/explore');
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    
    const blogData = {
      title: blogForm.title,
      author: blogForm.author,
      content: blogForm.content,
      category: blogForm.category,
      excerpt: blogForm.content.substring(0, 150) + '...',
      image: '/images/default-blog.jpg',
      tags: ['conservation'],
      date: new Date().toISOString().split('T')[0]
    };

    onBlogAdded(blogData);
    setBlogForm({ title: '', author: '', content: '', category: 'Learn' });
    navigate('/blog');
  };

  return (
    <div className="App">
      <Header user={user} onLogout={onLogout} onSearch={onSearch} />
      <Container fluid className="mt-3">
        <Row>
          <Col md={3}>
            <Sidebar user={user} />
          </Col>
          <Col md={9}>
            <Card>
              <Card.Body>
                <h2>Upload Content</h2>
                
                <Card className="mt-3">
                  <Card.Body>
                    <Tabs activeKey={activeTab} onSelect={setActiveTab} className="mb-3">
                      <Tab eventKey="destination" title="Add Destination">
                        <Form onSubmit={handleDestinationSubmit}>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Destination Name</Form.Label>
                                <Form.Control 
                                  value={destinationForm.name}
                                  onChange={(e) => setDestinationForm({...destinationForm, name: e.target.value})}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control 
                                  value={destinationForm.category}
                                  onChange={(e) => setDestinationForm({...destinationForm, category: e.target.value})}
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control 
                              value={destinationForm.location}
                              onChange={(e) => setDestinationForm({...destinationForm, location: e.target.value})}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Key Feature</Form.Label>
                            <Form.Control 
                              value={destinationForm.keyFeature}
                              onChange={(e) => setDestinationForm({...destinationForm, keyFeature: e.target.value})}
                            />
                          </Form.Group>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Area</Form.Label>
                                <Form.Control 
                                  value={destinationForm.area}
                                  onChange={(e) => setDestinationForm({...destinationForm, area: e.target.value})}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Established</Form.Label>
                                <Form.Control 
                                  value={destinationForm.established}
                                  onChange={(e) => setDestinationForm({...destinationForm, established: e.target.value})}
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                              as="textarea" 
                              rows={4}
                              value={destinationForm.description}
                              onChange={(e) => setDestinationForm({...destinationForm, description: e.target.value})}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control 
                              value={destinationForm.image}
                              onChange={(e) => setDestinationForm({...destinationForm, image: e.target.value})}
                              placeholder="/images/destination.jpg"
                            />
                          </Form.Group>

                          <Button variant="primary" type="submit">
                            Add Destination
                          </Button>
                        </Form>
                      </Tab>

                      <Tab eventKey="blog" title="Add Blog Post">
                        <Form onSubmit={handleBlogSubmit}>
                          <Form.Group className="mb-3">
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control 
                              value={blogForm.title}
                              onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control 
                              value={blogForm.author}
                              onChange={(e) => setBlogForm({...blogForm, author: e.target.value})}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control 
                              value={blogForm.category}
                              onChange={(e) => setBlogForm({...blogForm, category: e.target.value})}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control 
                              as="textarea" 
                              rows={8}
                              value={blogForm.content}
                              onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                              required
                            />
                          </Form.Group>

                          <Button variant="primary" type="submit">
                            Publish Blog
                          </Button>
                        </Form>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default UploadPage;