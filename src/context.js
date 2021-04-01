// import React, { Component } from 'react';
// import { products, productDetails } from './data';

// const ProductContext = React.createContext();

// class ProductProvider extends Component {
//     state = {
//         storeProducts: [],
//         detailsOpen: false,
//         detailProduct: productDetails,
//         cart: [],
//     }

//     componentDidMount() {
//         this.setProducts()
//     }

//     setProducts = () => {
//         let tempProducts = [];
//         products.forEach(item => {
//             const singleItem = {...item};
//             tempProducts = [...tempProducts, singleItem];
//         })
//         this.setState(() => {
//             return { products: tempProducts }
//         })
//     }

//     getItem = (id) => {
//         const product = this.state.products.find(item => item.id === id);
//         return product
//     }

//     handleDetail = (id) => {
//         const product = this.getItem(id);
//         this.setState(() => {
//             return {detailProduct: product}
//         })
//     }

//     handleDetailsToggle = () => {
//         if (this.state.detailsOpen) {
//             return {detailsOpen: false}
//         } else {
//             return {detailsOpen: true}
//         }
//       }

//     render() {
//         return (
//             <ProductContext.Provider value={{
//                 ...this.state,
//                 getItem: this.getItem,
//                 handleDetail: this.handleDetail,
//                 handleDetailsToggle: this.handleDetailsToggle,
//             }}>
//                 {this.props.children}
//             </ProductContext.Provider>
//         )
//     }
// }

// const ProductConsumer = ProductContext.Consumer;

// export { ProductProvider, ProductConsumer };