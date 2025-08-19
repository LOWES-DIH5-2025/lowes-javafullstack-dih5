import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import Footer from './components/Footer/Footer';
import { CartProvider } from './contexts/CartContext';


function App() {
  // JSX - Javascript and XML
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header />

          <main className="container py-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CheckoutPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
