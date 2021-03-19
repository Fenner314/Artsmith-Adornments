import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import JewelryList from './components/JewelryList';
import EngravingRepair from './components/EngravingRepair';
import OtherProjectsList from './components/OtherProjectsList';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import SizingChart from './components/SizingChart';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/jewelry" component={JewelryList} />
          <Route path="/engraving_repair" component={EngravingRepair} />
          <Route path="/other_projects" component={OtherProjectsList} />
          <Route path="/privacy_policy" component={PrivacyPolicy} />
          <Route path="/refund_policy" component={RefundPolicy} />
          <Route path="/sizing_chart" component={SizingChart} />
        </Switch>
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
