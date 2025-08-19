import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer/Footer';


function App() {
  // JSX - Javascript and XML
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/products" element={<ProductPage />} />
         <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
