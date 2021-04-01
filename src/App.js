import React, { useContext, useState, useEffect } from 'react';
import { products, productDetails } from './data';
import './css/App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import JewelryList from './components/JewelryList';
import EngravingRepair from './components/EngravingRepair';
import OtherProjectsList from './components/OtherProjectsList';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import SizingChart from './components/SizingChart';
import Details from './components/Details';
import Contact from './components/Contact';
import Cart from './components/Cart';

export const ProductContext = React.createContext();

function App() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [storeProducts, setStoreProducts] = useState();
  const [detailProduct, setDetailProduct] = useState(productDetails)

  useEffect(() => {
    handleSetProducts();
    console.log(products)
  }, [])

  const handleSetProducts = () => {
    let tempProducts = [];
    products.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    })
    console.log(tempProducts);
    setStoreProducts(() => {
      return tempProducts
    });
    console.log(storeProducts);
  }

  const getItem = (id) => {
    const product = storeProducts.find(item => item.id === id);
    return product;
  }

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProduct(product)
    console.log('hello')
  }

  const handleDetailsToggle = () => {
    detailsOpen ? setDetailsOpen(false) : setDetailsOpen(true)
  }

  const productContextValue = {
    detailsOpen,
    handleDetailsToggle,
    handleDetail
  }

  return (
    <ProductContext.Provider value={productContextValue}>
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
            <Route path="/cart" component={Cart} />
          </Switch>
          <Details />
          <Contact />
        </div>
      </div>
    </ProductContext.Provider>
  );
}


export default App;
