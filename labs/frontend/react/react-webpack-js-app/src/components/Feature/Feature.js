import React from 'react';
import './Feature.css';

const features = [
  {
    icon: 'bi-bag-check',
    title: 'Wide Product Range',
    description: 'Choose from thousands of products across multiple categories to suit every need.'
  },
  {
    icon: 'bi-truck',
    title: 'Fast Delivery',
    description: 'Get your orders delivered quickly and reliably with our express shipping options.'
  },
  {
    icon: 'bi-currency-dollar',
    title: 'Best Prices',
    description: 'Enjoy competitive pricing and exclusive deals every day.'
  },
  {
    icon: 'bi-shield-check',
    title: 'Secure Shopping',
    description: 'Shop with confidence thanks to our secure payment and privacy protection.'
  }
//   {
//     icon: 'bi-star',
//     title: 'Customer Satisfaction',
//     description: 'Our support team is here to help and ensure you have a great shopping experience.'
//   }
];

const Feature = () => {
  return (
    <section className="feature-section py-5">
      <div className="container">
        <h3 className="text-center mb-4 text-primary fw-bold">Why Shop With Us?</h3>
        <div className="row justify-content-center">
          {features.map((feature, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch" key={idx}>
              <div className="card feature-card text-center shadow-sm border-0">
                <div className="feature-icon mx-auto my-3">
                  <i className={`bi ${feature.icon} text-primary`} style={{ fontSize: '2.5rem' }}></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-2">{feature.title}</h5>
                  <p className="card-text text-secondary small">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
