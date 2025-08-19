import axios from 'axios';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

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

// Define Product interface
interface Product {
  id?: number;
  name?: string;
  title?: string;
  price: number;
  description: string;
  image?: string;
  rating?: number | { rate: number; count: number };
}

interface ProductCardProps {
  product: Product;
}

// Product Card Component
const ProductCard = ({ product }: ProductCardProps) => {
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
          <span className="ms-2 text-muted">({Number(ratingValue || 0).toFixed(1)})</span>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ProductFormData>();

  // 1. Component mount
  console.log('[1] ProductPage component rendered');

  const handleAddProductClick = () => {
    setShowModal(true);
    setAddSuccess(false);
    reset();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    reset();
  };

  interface ProductFormData {
    title: string;
    price: string; // Form inputs return strings by default
    description: string;
    image: string;
    rating: string; // Form inputs return strings by default
  }

  const onAddProduct: SubmitHandler<ProductFormData> = async (formData) => {
    try {
      // Trim whitespace and prepare payload
      const payload = {
        title: formData.title.trim(),
        price: parseFloat(formData.price),
        description: formData.description.trim(),
        image: formData.image.trim(),
        rating: { rate: parseFloat(formData.rating), count: 1 }
      };
      const response = await axios.post('https://fakestoreapi.com/products', payload);
      console.log('[Add Product] API response:', response.data);
      setAddSuccess(true);
      setShowModal(false);
      // Optionally, add to local products list
      setProducts([response.data, ...products]);
    } catch (error) {
      alert('Failed to add product.');
      console.error('[Add Product] Error:', error);
    }
  };

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
    <div className="container my-4">
      <Helmet>
        <title>Products | React E-Commerce</title>
        <meta name="description" content="Browse our collection of high-quality products. Find the perfect item for your needs at great prices." />
      </Helmet>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Our Products</h3>
        <button className="btn btn-success" onClick={handleAddProductClick}>
          + Add Product
        </button>
      </div>
      {addSuccess && (
        <div className="alert alert-success" role="alert">
          Product added successfully!
        </div>
      )}
      <div className="row g-4">
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="modal show fade" tabIndex={-1} style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Product</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <form onSubmit={handleSubmit(onAddProduct)}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input id="title" className={`form-control${errors.title ? ' is-invalid' : ''}`} {...register('title', { required: 'Title is required' })} placeholder="Product title" />
                    {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input id="price" type="number" step="0.01" className={`form-control${errors.price ? ' is-invalid' : ''}`} {...register('price', { required: 'Price is required', min: { value: 0.01, message: 'Minimum price is 0.01' } })} placeholder="Product price" />
                    {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea id="description" className={`form-control${errors.description ? ' is-invalid' : ''}`} {...register('description', { required: 'Description is required', minLength: { value: 10, message: 'At least 10 characters' } })} placeholder="Product description" />
                    {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input id="image" className={`form-control${errors.image ? ' is-invalid' : ''}`} {...register('image', { required: 'Image URL is required' })} placeholder="Image URL" />
                    {errors.image && <div className="invalid-feedback">{errors.image.message}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating (0-5)</label>
                    <input id="rating" type="number" step="0.1" min="0" max="5" className={`form-control${errors.rating ? ' is-invalid' : ''}`} {...register('rating', { required: 'Rating is required', min: { value: 0, message: 'Min is 0' }, max: { value: 5, message: 'Max is 5' } })} placeholder="Rating" />
                    {errors.rating && <div className="invalid-feedback">{errors.rating.message}</div>}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;