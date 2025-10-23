import React from 'react';
import { Card } from 'react-bootstrap';

function Categories({ currentCategory, onCategoryChange }){
  const categories = [
    { key: 'all', label: 'All Destinations' },
    { key: 'National Parks & Reserves', label: 'National Parks' },
    { key: 'Wildlife Conservancies', label: 'Conservancies' },
    { key: 'Indigenous Forests & Woodlands', label: 'Forests' },
    { key: 'Marine & Coastal Ecosystems', label: 'Marine' },
    { key: 'Threatened Species Habitats', label: 'Threatened' },
    { key: 'Reforestation & Restoration Projects', label: 'Reforestation' },
    { key: 'Wetlands & Rivers', label: 'Wetlands' },
    { key: 'Savanna & Grasslands', label: 'Savanna' },
    { key: 'Mountain & Highland Ecosystems', label: 'Mountains' },
    { key: 'Community Conservancies & Eco-Tourism', label: 'Community' }
  ];

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Explore by Category</Card.Title>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category.key}
              className={`category-btn ${currentCategory === category.key ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Categories;