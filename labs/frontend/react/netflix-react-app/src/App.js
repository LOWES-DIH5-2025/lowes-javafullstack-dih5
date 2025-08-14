import './App.css'; // css for app component and its descendants
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NetflixPage from './pages/NetflixPage/NetflixPage';
// import ProductPage from './pages/ProductsPage/ProductsPage';
// import ProductPage from './pages/ProductsPage/ProductsPage1';
// import ProductPage from './pages/ProductsPage/ProductsPage2';
import ProductPage from './pages/ProductsPage/ProductsPage3';

import UsersPage from './pages/UsersPage/UsersPage';
import AddUser from './pages/UsersPage/AddUser';
import ViewUser from './pages/UsersPage/ViewUser';
import { CartProvider } from './contexts/CartContext';

// Functional Components with Named fn
function App() {
  // component must return JSX
  return (
    <BrowserRouter>
      <div>
      // Step 3 of Context: Let's share the data between the needed components
        <CartProvider>
          <Header />

          <main className='container mt-5 pt-3'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/netflix' element={<NetflixPage />} />
              <Route path='/products' element={<ProductPage />} />
              <Route path='/users' element={<UsersPage />} />
              <Route path='/users/add' element={<AddUser />} />
              <Route path='/users/:id' element={<ViewUser />} />

            </Routes>
          </main>

          <Footer />
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
