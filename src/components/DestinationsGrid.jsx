import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';

function DestinationsGrid({ destinations, onViewDestination }){
  if (!destinations || destinations.length === 0) {
    return <p>No destinations found.</p>;
  }

  return (
    <Row>
      {destinations.map(destination => (
        <Col key={destination.id} xs={12} md={6} lg={4} className="mb-4">
          <Card 
            className="h-100 destination-card" 
            onClick={() => onViewDestination(destination)}
            style={{ cursor: 'pointer' }}
          >
            <Card.Img 
              variant="top" 
              src={destination.images[0]} 
              alt={destination.name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
              <Badge bg="success" className="mb-2 align-self-start">
                {destination.category}
              </Badge>
              <Card.Title>{destination.name}</Card.Title>
              <Card.Text className="flex-grow-1 text-muted">
                {destination.description.substring(0, 100) + '...'}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                <small className="text-muted">
                  <i className="bi bi-geo-alt me-1"></i>
                  {destination.location}
                </small>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDestination(destination);
                  }}
                >
                  Explore
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DestinationsGrid;