import React from 'react';
import './Banner.css';

const retailImages = [
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80', // Clothing store
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80', // Shopping bags
  'https://images.unsplash.com/photo-1522154832112-5c4a8c93d28f?auto=format&fit=crop&w=800&q=80', // Supermarket aisle
  'https://images.unsplash.com/photo-1523909835653-ac7acd2b6a1a?auto=format&fit=crop&w=800&q=80', // Shoes store
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', // Retail checkout
];

const carouselData = [
  {
    image: retailImages[0],
    headline: 'Discover Amazing Deals!',
    message: 'Shop the latest products and exclusive offers at our retail store.',
    cta: 'Shop Now',
  },
  {
    image: retailImages[1],
    headline: 'New Arrivals!',
    message: 'Check out the latest trends and new products in store today.',
    cta: 'Explore New',
  },
//   {
//     image: retailImages[2],
//     headline: 'Fresh Groceries!',
//     message: 'Get the freshest groceries delivered to your door.',
//     cta: 'Order Groceries',
//   },
//   {
//     image: retailImages[3],
//     headline: 'Step Up Your Style!',
//     message: 'Shop the best footwear for every occasion.',
//     cta: 'Shop Shoes',
//   },
  {
    image: retailImages[4],
    headline: 'Easy Checkout!',
    message: 'Experience hassle-free shopping and quick checkout.',
    cta: 'Start Shopping',
  }
];

const Banner = () => {
  return (
    <div className="banner-container my-4">
      <div id="retailBannerCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#retailBannerCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
              aria-current={idx === 0 ? 'true' : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner rounded shadow-lg">
          {carouselData.map((slide, idx) => (
            <div
              key={idx}
              className={`carousel-item${idx === 0 ? ' active' : ''}`}
            >
              <img
                src={slide.image}
                className="d-block w-100 banner-img"
                alt={slide.headline}
                style={{ maxHeight: '340px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2 mb-2 small-cta-panel">
                <h5 className="fw-bold text-primary mb-1" style={{ fontSize: '1.1rem' }}>{slide.headline}</h5>
                <p className="mb-2 text-light" style={{ fontSize: '0.95rem' }}>{slide.message}</p>
                <a href="#" className="btn btn-sm btn-gradient-blue text-white shadow-sm">{slide.cta}</a>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#retailBannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#retailBannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
