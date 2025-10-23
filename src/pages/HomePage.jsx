import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import DestinationsGrid from '../components/DestinationsGrid';
import DestinationDetail from '../components/DestinationDetail';
import Categories from '../components/Categories';

function HomePage({ destinations, searchQuery, user, onLogout, onSearch }){
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = currentCategory === 'all' || dest.category === currentCategory;
    const matchesSearch = !searchQuery || 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

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
              {selectedDestination ? (
                <DestinationDetail 
                  destination={selectedDestination} 
                  onBack={() => setSelectedDestination(null)}
                />
              ) : (
                <>
                  <Categories 
                    currentCategory={currentCategory}
                    onCategoryChange={setCurrentCategory}
                  />
                  <DestinationsGrid 
                    destinations={filteredDestinations}
                    onViewDestination={setSelectedDestination}
                    searchQuery={searchQuery}
                  />
                </>
              )}
            </main>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;