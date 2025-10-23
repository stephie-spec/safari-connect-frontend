import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

const Categories = ({ currentCategory, onCategoryChange }) => {
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
        <ButtonGroup className="flex-wrap">
          {categories.map(category => (
            <Button
              key={category.key}
              variant={currentCategory === category.key ? 'primary' : 'outline-primary'}
              size="sm"
              className="m-1 rounded-pill"
              onClick={() => onCategoryChange(category.key)}
            >
              {category.label}
            </Button>
          ))}
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default Categories;