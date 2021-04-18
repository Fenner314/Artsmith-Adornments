import React, { useContext } from 'react';
import {ProductContext} from '../../App';
import Button from '../Button';
import PaypalButton from './PaypalButton';

export default function CartTotals(props) {
    const {history} = props
    const { cartSubTotal, cartTax, cartTotal, clearCart } = useContext(ProductContext)

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 mb-4 ml-sm-5 ml-md-auto col-sm-8 d-flex flex-column align-items-end" style={{width: "160px"}}>
                    <div className="mb-3" style={{width: "160px"}}>
                        <Button
                            text={'Clear Cart'}
                            height={'40px'}
                            maxWidth={'160px'}
                            fontSize={'1rem'}
                            textColor={'rgb(220, 53, 69)'}
                            color={'rgb(220, 53, 69)'}
                            border={'1px solid rgb(220, 53, 69)'}
                            borderRadius={'5px'}
                            onClick={() => clearCart()}
                        />                    
                    </div>
                    {/* <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={() => clearCart()}>
                        Clear Cart
                    </button> */}
                    <h5>
                        <span className="text-title">
                            Subtotal:&nbsp;
                        </span>
                        <strong>${cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Tax:&nbsp;
                        </span>
                        <strong>${cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Total:&nbsp;
                        </span>
                        <strong>${cartTotal}</strong>
                    </h5>
                    <PaypalButton 
                        total={cartTotal} 
                        clearCart={clearCart} 
                        history={history} 
                    />
                </div>
            </div>
        </div>
    )
}
