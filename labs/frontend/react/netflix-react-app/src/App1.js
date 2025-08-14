import './App.css'; // css for app component and its descendants
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
// import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { CartProvider } from './contexts/CartContext';

// Functional Components with Named fn
function App() {
  // component must return JSX
  return (
    // Step 3 of Context: Let's share the data between the needed components
    <CartProvider>
      <Header />

      <main className="mt-5 pt-3">
        {/* <HomePage /> */}
        <ProductsPage />
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;