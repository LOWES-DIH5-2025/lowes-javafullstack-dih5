import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log('Contact Form Data:', data);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 4000); // Hide after 4 seconds
  };

  return (
    <div className="container py-4" style={{ maxWidth: 500 }}>
      <h2 className="mb-4 text-center">Contact Us</h2>
      {success && <div className="alert alert-success" role="alert">Thank you for contacting us!</div>}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            className={`form-control${errors.name ? ' is-invalid' : ''}`}
            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
            placeholder="Enter your name"
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            className={`form-control${errors.email ? ' is-invalid' : ''}`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Enter your email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            rows={4}
            className={`form-control${errors.message ? ' is-invalid' : ''}`}
            {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
            placeholder="Type your message here..."
          />
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage