import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="landing-hero"
      style={{
        backgroundImage: `url('/data/images/amboseli-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container>
        <div className="text-right">
          <h2 className="display-3 fw-bold mb-2" style={{color: '#eee6df'}}>Safari Connect</h2>
          <h4 className="mb-2" style={{color: '#e8e0c4'}}>Connecting Natural Wonders</h4>
          <p className="mb-4" style={{ width: '600px', margin: '0 auto', color: '#eee6df' }}>
            Explore the world's most breathtaking conservation destinations. 
            Discover protected areas, wildlife sanctuaries, and join the community 
            dedicated to preserving our planet's natural heritage.
          </p>
          <Button 
            variant="warning" 
            size="lg"
            className="px-4 py-2 fw-bold"
            onClick={() => navigate('/explore')}
          >
            Explore Destinations
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;