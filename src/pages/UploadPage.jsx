import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const UploadPage = ({ onDestinationAdded, onBlogAdded, user, onLogout, onSearch }) => {
  const [activeTab, setActiveTab] = useState('destination');
  const navigate = useNavigate();

  // Destination form state
  const [destinationForm, setDestinationForm] = useState({
    name: '',
    category: '',
    images: [''],
    location: '',
    keyFeature: '',
    conservationStatus: '',
    established: '',
    area: '',
    description: ''
  });

  // Blog form state
  const [blogForm, setBlogForm] = useState({
    title: '',
    category: '',
    content: ''
  });

  const handleDestinationSubmit = (e) => {
    e.preventDefault();
    
    // Filter out empty image strings and ensure proper paths
    const images = destinationForm.images
      .filter(img => img.trim() !== '')
      .map(img => img.startsWith('data/images/') ? img : `data/images/${img}`);
    
    const destinationData = {
      ...destinationForm,
      images: images.length > 0 ? images : ['data/images/default-destination.jpg'],
      established: parseInt(destinationForm.established) || 0
    };

    onDestinationAdded(destinationData);
    navigate('/explore');
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    
    const blogData = {
      ...blogForm
    };

    onBlogAdded(blogData);
    navigate('/blog');
  };

  const addImageField = () => {
    setDestinationForm(prev => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const updateImage = (index, value) => {
    setDestinationForm(prev => ({
      ...prev,
      images: prev.images.map((img, i) => i === index ? value : img)
    }));
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
                    <Tabs
                      activeKey={activeTab}
                      onSelect={(tab) => setActiveTab(tab)}
                      className="mb-3"
                    >
                      {/* Destination Tab */}
                      <Tab eventKey="destination" title="Add Destination">
                        <Form onSubmit={handleDestinationSubmit}>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Destination Name *</Form.Label>
                                <Form.Control 
                                  type="text" 
                                  value={destinationForm.name}
                                  onChange={(e) => setDestinationForm({...destinationForm, name: e.target.value})}
                                  placeholder="e.g., Maasai Mara National Reserve"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Category *</Form.Label>
                                <Form.Control 
                                  type="text" 
                                  value={destinationForm.category}
                                  onChange={(e) => setDestinationForm({...destinationForm, category: e.target.value})}
                                  placeholder="e.g., National Parks & Reserves"
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label>Location *</Form.Label>
                            <Form.Control 
                              type="text" 
                              value={destinationForm.location}
                              onChange={(e) => setDestinationForm({...destinationForm, location: e.target.value})}
                              placeholder="e.g., Narok County, Kenya"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Key Feature *</Form.Label>
                            <Form.Control 
                              type="text" 
                              value={destinationForm.keyFeature}
                              onChange={(e) => setDestinationForm({...destinationForm, keyFeature: e.target.value})}
                              placeholder="e.g., Great Wildebeest Migration"
                              required
                            />
                          </Form.Group>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Conservation Status</Form.Label>
                                <Form.Control 
                                  type="text" 
                                  value={destinationForm.conservationStatus}
                                  onChange={(e) => setDestinationForm({...destinationForm, conservationStatus: e.target.value})}
                                  placeholder="e.g., Protected, Endangered, etc."
                                />
                              </Form.Group>
                            </Col>
                            <Col md={3}>
                              <Form.Group className="mb-3">
                                <Form.Label>Established Year</Form.Label>
                                <Form.Control 
                                  type="number" 
                                  value={destinationForm.established}
                                  onChange={(e) => setDestinationForm({...destinationForm, established: e.target.value})}
                                  placeholder="e.g., 1961"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={3}>
                              <Form.Group className="mb-3">
                                <Form.Label>Area</Form.Label>
                                <Form.Control 
                                  type="text" 
                                  value={destinationForm.area}
                                  onChange={(e) => setDestinationForm({...destinationForm, area: e.target.value})}
                                  placeholder="e.g., 1,510 km²"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label>Description *</Form.Label>
                            <Form.Control 
                              as="textarea" 
                              rows={6}
                              value={destinationForm.description}
                              onChange={(e) => setDestinationForm({...destinationForm, description: e.target.value})}
                              placeholder="Detailed description of the destination, conservation efforts, wildlife, etc."
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <Form.Label>Image URLs</Form.Label>
                              <Button variant="outline-secondary" size="sm" onClick={addImageField}>
                                + Add Another Image
                              </Button>
                            </div>
                            {destinationForm.images.map((image, index) => (
                              <Form.Control
                                key={index}
                                type="text"
                                value={image}
                                onChange={(e) => updateImage(index, e.target.value)}
                                placeholder="e.g., data/images/maasaimara-1.jpg"
                                className="mb-2"
                              />
                            ))}
                            <Form.Text className="text-muted">
                              Use paths like "data/images/filename.jpg". Images should be uploaded to your public/data/images/ folder.
                            </Form.Text>
                          </Form.Group>

                          <Button variant="primary" type="submit" className="mt-3">
                            Add Destination
                          </Button>
                        </Form>
                      </Tab>

                      {/* Blog Tab */}
                      <Tab eventKey="blog" title="Add Blog Post">
                        <Form onSubmit={handleBlogSubmit}>
                          <Form.Group className="mb-3">
                            <Form.Label>Blog Title *</Form.Label>
                            <Form.Control 
                              type="text" 
                              value={blogForm.title}
                              onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                              placeholder="e.g., Endangered Species of Samburu: The Grevy's Zebra"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Category *</Form.Label>
                            <Form.Control 
                              type="text" 
                              value={blogForm.category}
                              onChange={(e) => setBlogForm({...blogForm, category: e.target.value})}
                              placeholder="e.g., Learn, Conservation, Wildlife"
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label>Content *</Form.Label>
                            <Form.Control 
                              as="textarea" 
                              rows={12}
                              value={blogForm.content}
                              onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                              placeholder="Write your detailed blog content here..."
                              required
                            />
                          </Form.Group>

                          <Button variant="primary" type="submit">
                            Publish Blog Post
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
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="footer-content">
          <p>Safari Connect - Connecting Natural Wonders</p>
        </div>
      </footer>
    </div>
  );
};

export default UploadPage;