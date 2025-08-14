import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import HomePage from './pages/HomePage';

function App() { // use Pascalcase
  // JSX - Javascript and XML
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

