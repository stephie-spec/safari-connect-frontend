import React from 'react';
import { Button, Row, Col, Card, Badge } from 'react-bootstrap';

const DestinationDetail = ({ destination, onBack }) => {
  return (
    <Card>
      <Card.Body>
        <Button variant="outline-secondary" onClick={onBack} className="mb-4">
          <i className="fas fa-arrow-left me-2"></i>Back to All Destinations
        </Button>

        <Row>
          <Col md={6}>
            <div className="mb-3">
              <img 
                src={destination.images[0]} 
                alt={destination.name}
                className="img-fluid rounded"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
            </div>
          </Col>
          <Col md={6}>
            <h2>{destination.name}</h2>
            <Badge bg="success" className="mb-3">
              {destination.category}
            </Badge>
            
            <div className="mb-4">
              <Row>
                <Col xs={6} className="mb-2">
                  <i className="fas fa-map-marker-alt me-2 text-muted"></i>
                  <span>{destination.location}</span>
                </Col>
                <Col xs={6} className="mb-2">
                  <i className="fas fa-star me-2 text-muted"></i>
                  <span>{destination.keyFeature}</span>
                </Col>
                <Col xs={6} className="mb-2">
                  <i className="fas fa-mountain me-2 text-muted"></i>
                  <span>{destination.area}</span>
                </Col>
                <Col xs={6} className="mb-2">
                  <i className="fas fa-calendar-alt me-2 text-muted"></i>
                  <span>Est. {destination.established}</span>
                </Col>
              </Row>
            </div>

            <div className="detail-description">
              <p>{destination.description}</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DestinationDetail;