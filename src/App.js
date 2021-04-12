import React, { useState, useEffect } from 'react';
import { products, productDetails } from './data';
import './css/App.css';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import JewelryList from './components/JewelryList';
import EngravingRepair from './components/EngravingRepair';
import OtherProjectsList from './components/OtherProjectsList';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import SizingChart from './components/SizingChart';
import Details from './components/Details';
import CartAdded from './components/Cart/CartAdded';
import Contact from './components/Contact';
import Account from './components/Account';
import Cart from './components/Cart/Cart';

export const ProductContext = React.createContext();

function App() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [cartAddedOpen, setCartAddedOpen] = useState(false);
  const [storeProducts, setStoreProducts] = useState(products);
  const [detailProduct, setDetailProduct] = useState(productDetails);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [tempCount, setTempCount] = useState(0);

  useEffect(() => {
    addTotals()
  }, [cart])

  const getItem = (id) => {
    const product = storeProducts.find(item => item.id === id);
    return product;
  }

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  }

  const handleDetailsToggle = () => {
    detailsOpen ? setDetailsOpen(false) : setDetailsOpen(true)
  }

  const handleCartAddedOpenToggle = () => {
    cartAddedOpen ? setCartAddedOpen(false) : setCartAddedOpen(true)
  }

  const addToCart = (id) => {
    const product = getItem(id);
    product.inCart = true;
    if (product.count === 0) {
      product.count = 1
    }
    const price = product.price;
    product.total = price;
    setCartLength(cartLength + product.count);
    setCartAddedOpen(true);

    setCart(() => {
      return [...cart, product]
    });
  }

  const increment = (id) => {
    const selectedProduct = cart.find(item => item.id === id);
    const index = cart.indexOf(selectedProduct);
    const product = getItem(id);
    // const product = cart[index];

    product.count += 1;
    product.total = product.count * product.price;
    setCartLength(cartLength + 1);

    // setCart(() => {
    //   return [...cart, product]
    // })
    setCart([...cart]);
    console.log(cart)
  }

  const decrement = (id) => {
    const selectedProduct = cart.find(item => item.id === id);
    const index = cart.indexOf(selectedProduct);
    const product = getItem(id);
    // const product = cart[index];

    product.count -= 1;
    product.total = product.count * product.price;

    setCartLength(cartLength - 1);
    setCart([...cart]);
  }

  const qtyIncrement = (id) => {
    const selectedProduct = cart.find(item => item.id === id);
    const index = cart.indexOf(selectedProduct);
    const product = getItem(id);
    // const product = cart[index];

    product.count += 1;
    product.total = product.count * product.price;

    // setCart(() => {
    //   return [...cart, product]
    // })
    setCart([...cart]);
    console.log(cart)
  }

  const qtyDecrement = (id) => {
    const selectedProduct = cart.find(item => item.id === id);
    const index = cart.indexOf(selectedProduct);
    const product = getItem(id);
    // const product = cart[index];

    product.count -= 1;
    product.total = product.count * product.price;

    setCart([...cart]);
  }

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    setCartLength(cartLength - removedProduct.count);
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCart([...tempCart]);
    setStoreProducts([...tempProducts]);
  }

  const clearCart = () => {
    cart.forEach(item => {
      item.inCart = false;
      item.count = 0;
      item.total = 0;
    });
    setCart([]);
    setCartLength(0);
  }

  const addTotals = () => {
    let subTotal = 0;
    cart.map(item => (subTotal += (item.price * item.count)));
    const tempTax = subTotal * .065;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  }

  const productContextValue = {
    getItem,
    detailsOpen,
    setDetailsOpen,
    cartAddedOpen,
    handleCartAddedOpenToggle,
    detailProduct,
    cart,
    cartLength,
    cartSubTotal,
    cartTax,
    cartTotal,
    handleDetailsToggle,
    handleDetail,
    addToCart,
    increment,
    decrement,
    qtyIncrement,
    qtyDecrement,
    removeItem,
    clearCart,
    addTotals,
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
            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Details {...productDetails} detailProduct={detailProduct} />
          <CartAdded />
          <Contact />
        </div>
      </div>
    </ProductContext.Provider>
  );
}


export default App;
