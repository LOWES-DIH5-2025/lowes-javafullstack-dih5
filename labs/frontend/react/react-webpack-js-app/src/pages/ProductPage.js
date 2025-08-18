import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Sample product data
// const products = [
//   {
//     id: 1,
//     name: 'Wireless Headphones',
//     price: 99.99,
//     description: 'High-quality wireless headphones with noise cancellation',
//     image: 'https://via.placeholder.com/200x150?text=Wireless+Headphones',
//     rating: 4.5
//   },
//   {
//     id: 2,
//     name: 'Smart Watch',
//     price: 199.99,
//     description: 'Feature-rich smartwatch with health tracking',
//     image: 'https://via.placeholder.com/200x150?text=Smart+Watch',
//     rating: 4.2
//   },
//   {
//     id: 3,
//     name: 'Bluetooth Speaker',
//     price: 79.99,
//     description: 'Portable bluetooth speaker with 20h battery life',
//     image: 'https://via.placeholder.com/200x150?text=Bluetooth+Speaker',
//     rating: 4.7
//   },
//   {
//     id: 4,
//     name: 'Laptop Backpack',
//     price: 49.99,
//     description: 'Durable backpack with laptop compartment',
//     image: 'https://via.placeholder.com/200x150?text=Laptop+Backpack',
//     rating: 4.3
//   },
//   {
//     id: 5,
//     name: 'Wireless Mouse',
//     price: 29.99,
//     description: 'Ergonomic wireless mouse with silent clicks',
//     image: 'https://via.placeholder.com/200x150?text=Wireless+Mouse',
//     rating: 4.0
//   },
//   {
//     id: 6,
//     name: 'USB-C Hub',
//     price: 39.99,
//     description: '7-in-1 USB-C hub with 4K HDMI',
//     image: 'https://via.placeholder.com/200x150?text=USB-C+Hub',
//     rating: 4.6
//   }
// ];

// Product Card Component
const ProductCard = ({ product }) => {
  // Support both sample data and fakestoreapi data
  const name = product.name || product.title || 'No Name';
  const price = typeof product.price === 'number' ? product.price : 0;
  let description = product.description || '';
  const image = product.image || 'https://via.placeholder.com/200x150?text=No+Image';
  // Truncate description to first 20 words
  const descWords = description.split(' ');
  if (descWords.length > 20) {
    description = descWords.slice(0, 20).join(' ') + '...';
  }
  // Fakestoreapi: rating is an object { rate, count }
  let ratingValue = 0;
  if (typeof product.rating === 'number') {
    ratingValue = product.rating;
  } else if (product.rating && typeof product.rating.rate === 'number') {
    ratingValue = product.rating.rate;
  }
  // Defensive: fallback to 0 if not a number
  if (isNaN(ratingValue)) ratingValue = 0;

  return (
    <div className="card h-100 shadow-sm">
      <img src={image} alt={name} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-primary">${price.toFixed(2)}</h6>
        <p className="card-text">{description}</p>
        <div className="mt-auto">
          {Array(5).fill().map((_, i) => (
            <span key={i} className={i < Math.floor(ratingValue) ? 'text-warning' : 'text-secondary'}>
              ★
            </span>
          ))}
          <span className="ms-2 text-muted">({ratingValue.toFixed(1)})</span>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // 1. Component mount
  console.log('[1] ProductPage component rendered');

  useEffect(() => {
    // 2. Before API call
    console.log('[2] useEffect triggered, fetching products from API...');
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        // 3. After successful API response
        console.log('[3] Products fetched successfully:', response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        // 4. On API error
        console.error('[4] Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    // 5. When rendering/loading
    console.log('[5] Loading products...');
    return <div>Loading...</div>;
  }

  // 6. Rendering products
  console.log('[6] Rendering products:', products);

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4">Our Products</h3>
      <div className="row g-4">
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;