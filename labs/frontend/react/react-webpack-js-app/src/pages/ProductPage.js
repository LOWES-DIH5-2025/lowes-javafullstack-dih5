import React from 'react';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://via.placeholder.com/200x150?text=Wireless+Headphones',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Feature-rich smartwatch with health tracking',
    image: 'https://via.placeholder.com/200x150?text=Smart+Watch',
    rating: 4.2
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 79.99,
    description: 'Portable bluetooth speaker with 20h battery life',
    image: 'https://via.placeholder.com/200x150?text=Bluetooth+Speaker',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Laptop Backpack',
    price: 49.99,
    description: 'Durable backpack with laptop compartment',
    image: 'https://via.placeholder.com/200x150?text=Laptop+Backpack',
    rating: 4.3
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    price: 29.99,
    description: 'Ergonomic wireless mouse with silent clicks',
    image: 'https://via.placeholder.com/200x150?text=Wireless+Mouse',
    rating: 4.0
  },
  {
    id: 6,
    name: 'USB-C Hub',
    price: 39.99,
    description: '7-in-1 USB-C hub with 4K HDMI',
    image: 'https://via.placeholder.com/200x150?text=USB-C+Hub',
    rating: 4.6
  }
];

// Product Card Component
const ProductCard = ({ product }) => {
  const { name, price, description, image, rating } = product;
  
  return (
    <div style={styles.card}>
      <img 
        src={image} 
        alt={name} 
        style={styles.image} 
      />
      <div style={styles.cardContent}>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.price}>${price.toFixed(2)}</p>
        <p style={styles.description}>{description}</p>
        <div style={styles.rating}>
          {Array(5).fill().map((_, i) => (
            <span key={i} style={i < Math.floor(rating) ? styles.starFilled : styles.star}>
              ★
            </span>
          ))}
          <span style={styles.ratingText}>({rating.toFixed(1)})</span>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Products</h1>
      <div style={styles.productsGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '10px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    },
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '15px',
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '1.2rem',
    color: '#333',
  },
  price: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '0 0 10px 0',
  },
  description: {
    color: '#666',
    fontSize: '0.9rem',
    margin: '0 0 15px 0',
    lineHeight: '1.4',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  star: {
    color: '#ddd',
    fontSize: '1.2rem',
  },
  starFilled: {
    color: '#ffc107',
    fontSize: '1.2rem',
  },
  ratingText: {
    marginLeft: '8px',
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default ProductPage;