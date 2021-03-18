import logo from './logo.svg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductCategories from './components/ProductCategories';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="content">
        <Banner />
        <ProductCategories />
        <Contact />
      </div>
    </div>
  );
}

export const categories = [
  {
    id: 1,
    name: 'Rings',
    img: "img/ring.jpg",
    price: 50
  },
  {
    id: 2,
    name: 'Bracelets',
    img: "img/bracelet.jpg",
    price: 50
  },
  {
    id: 3,
    name: 'Earrings',
    img: "img/earrings.jpg",
    price: 50
  },
  {
    id: 4,
    name: 'Necklaces',
    img: "img/necklace.jpg",
    price: 50
  },
]

export default App;
