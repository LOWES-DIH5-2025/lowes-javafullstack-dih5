import { Helmet } from 'react-helmet';
import Banner from '../components/Banner/Banner';
import Feature from '../components/Feature/Feature';

const HomePage = () => {
  return (
    <div className="homepage-container bg-transparent shadow-none p-0">
      <Helmet>
        <title>Home | React E-Commerce</title>
        <meta name="description" content="Welcome to our React E-Commerce store. Discover amazing products at great prices." />
      </Helmet>
      <Banner />
      <Feature />
    </div>
  );
};

export default HomePage;
