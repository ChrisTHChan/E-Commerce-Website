import React from 'react'
import {connect} from 'react-redux'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cartSelector.js'
import CheckOutItem from '../../components/checkout-item/CheckoutItem.js'
import StripeCheckoutButton from '../../components/stripe-button/stripeButton.js'

import './checkout-page.scss'

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div classname='header-block'>
                    <span>Product</span>
                </div>
                <div classname='header-block'>
                    <span>Description</span>
                </div>
                <div classname='header-block'>
                    <span>Quantity</span>
                </div>
                <div classname='header-block'>
                    <span>Price</span>
                </div>
                <div classname='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => {
                    return <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                })
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payments:
                <br/>
                4242 4242 4242 4242 - Expires on 01/20 - CVV : 123
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state),
        total: selectCartTotal(state)
    }
}

export default connect(mapStateToProps, null)(CheckoutPage)