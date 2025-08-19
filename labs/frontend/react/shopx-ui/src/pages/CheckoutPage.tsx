import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const CheckoutPage = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    cartCount, 
    clearCart 
  } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );

  if (cartCount === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your cart is empty</h2>
        <p className="lead">Looks like you haven't added any items to your cart yet.</p>
        <Link to="/products" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Your Cart ({cartCount} items)</h2>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="row align-items-center border-bottom pb-3 mb-3"
                >
                  <div className="col-md-2">
                    <img 
                      src={item.image || 'https://via.placeholder.com/100'} 
                      alt={item.name || item.title} 
                      className="img-fluid rounded"
                      style={{ maxHeight: '80px' }}
                    />
                  </div>
                  <div className="col-md-4">
                    <h5 className="mb-1">{item.name || item.title}</h5>
                    <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id!, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id!, item.quantity + 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-end">
                    <h6 className="mb-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </h6>
                  </div>
                  <div className="col-md-1 text-end">
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.id!)}
                      title="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="d-flex justify-content-between mt-4">
                <Link to="/products" className="btn btn-outline-secondary">
                  Continue Shopping
                </Link>
                <button 
                  className="btn btn-outline-danger"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({cartCount} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <h5>Total</h5>
                <h5>${totalPrice.toFixed(2)}</h5>
              </div>
              <button 
                className="btn btn-primary w-100"
                onClick={() => alert('Proceeding to checkout!')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
