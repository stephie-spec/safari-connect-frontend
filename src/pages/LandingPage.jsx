import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="landing-hero"
      style={{
        backgroundImage: `url('/images/hero/safari-hero.jpg')`,
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
        <div className="text-center text-white">
          <h1 className="display-3 fw-bold mb-3">Safari Connect</h1>
          <p className="h4 mb-4">Connecting Natural Wonders</p>
          <p className="lead mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Explore the world's most breathtaking conservation destinations. 
            Discover protected areas, wildlife sanctuaries, and join the community 
            dedicated to preserving our planet's natural heritage.
          </p>
          <Button 
            variant="warning" 
            size="lg"
            className="px-5 py-3 fw-bold"
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